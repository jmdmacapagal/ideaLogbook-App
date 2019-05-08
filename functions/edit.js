let ideas = localStorageData()
const ideaID = location.hash.substring(1)
const ideaTitle = document.querySelector('#ideaTitle')
const ideaDescription = document.querySelector('#ideaDescription')

const idea = ideas.find(function(idea) {
    return idea.id == ideaID
})

if (idea === undefined) {
    location.assign('../index.html')
}
console.log(idea.title)
console.log(idea.description)

ideaTitle.value = idea.title
ideaDescription.value = idea.description