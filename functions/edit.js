let ideas = localStorageData()
const ideaId = location.hash.substring(1)
const ideaTitle = document.querySelector('#ideaTitle')
const ideaDescription = document.querySelector('#ideaDescription')

let idea = ideas.find(function(idea) {
    return idea.id == ideaId
})

if (idea === undefined) {
    location.assign('../index.html')
}

ideaTitle.value = idea.title
ideaDescription.value = idea.description

ideaTitle.addEventListener('input', e => {
    idea.title = e.target.value
    saveIdea(ideas)
})

ideaDescription.addEventListener('input', e => {
    idea.description = e.target.value
    saveIdea(ideas)
})

window.addEventListener('storage', e => {
    if(e.key === 'ideas') {
        ideas = JSON.parse(e.newValue)
        idea = ideas.find(function (idea) {
            return idea.id == ideaId
        })

        if (idea === undefined) {
            location.assign('../index.html')
        }

        ideaTitle.value = idea.title
        ideaDescription.value = idea.description
    }
})