let ideas = localStorageData()
const ideaId = location.hash.substring(1)
const ideaTitle = document.querySelector('#ideaTitle')
const ideaDescription = document.querySelector('#ideaDescription')
const deleteButton = document.querySelector('#deleteButton')
const homeButton = document.querySelector('#homeButton')

updateIdea(ideas)

deleteButton.addEventListener('click', () => {
    removeIdea(Number(ideaId))
    saveIdea(ideas)
    location.assign('../index.html')
})

homeButton.addEventListener('click', () => {
    location.assign('../index.html')
})

window.addEventListener('storage', e => {
    if(e.key === 'ideas') {
        ideas = JSON.parse(e.newValue)
        updateIdea(ideas)
    }
})