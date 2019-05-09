const ideaTitle = document.querySelector('#ideaTitle')
const ideaDescription = document.querySelector('#ideaDescription')
const ideas = localStorageData()

document.querySelector('#saveButton').addEventListener('click', (e) => {
        const id = generateID()
        e.preventDefault()
        ideas.push({
            id: id,
            title: ideaTitle.value,
            description: ideaDescription.value,
            createdAt: generateTimestamp(),
            updatedAt: generateTimestamp()
        })
        saveIdea(ideas)
        location.assign(`../index.html`)
})
