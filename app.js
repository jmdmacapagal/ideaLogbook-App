let ideas = localStorageData()

renderIdea(ideas, filters)

document.querySelector('#addForm').addEventListener('submit', e => {
    const id = generateID()
    e.preventDefault()
    ideas.push({
        id: id,
        title: '',
        description: '',
        createdAt: 1,
        updatedAt: 1  
    })
    saveIdea(ideas)
    location.assign(`./views/add-edit-idea.html#${id}`)
})

document.querySelector('#search').addEventListener('input', e => {
    filters.search = e.target.value
    renderIdea(ideas, filters)
})

window.addEventListener('storage', e => {
    if (e.key === 'ideas') {
        ideas = JSON.parse(e.newValue)
        renderIdea(ideas, filters)
    }
})