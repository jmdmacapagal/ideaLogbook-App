let ideas = localStorageData()

renderIdea(ideas, filters)

document.querySelector('#addForm').addEventListener('submit', e => {
    e.preventDefault()
    ideas.push({
        id: generateID(),
        title: e.target.addIdea.value,
        description: '',
        createdAt: 1,
        updatedAt: 1  
    })
    saveIdea(ideas)
    e.target.addIdea.value = ''
    renderIdea(ideas, filters)
})

document.querySelector('#search').addEventListener('input', e => {
    filters.search = e.target.value
    renderIdea(ideas, filters)
})

document.querySelector('#addButton').addEventListener('click',() => {
    location.assign('./views/add-edit-idea.html')
})