let ideas = localStorageData()


renderIdea(ideas, filters)

document.querySelector('#addForm').addEventListener('submit', e => {
    const id = generateID()
    e.preventDefault()
    ideas.push({
        id: id,
        title: '',
        description: '',
        createdAt: generateTimestamp(),
        updatedAt: generateTimestamp()  
    })
    saveIdea(ideas)
    location.assign(`./views/add-edit-idea.html#${id}`)
})

document.querySelector('#search').addEventListener('input', e => {
    filters.search = e.target.value
    renderIdea(ideas, filters)
})

document.querySelector('#filter').addEventListener('change', e => {
    filters.sortBy = e.target.value
    console.log(e.target.value)
})

window.addEventListener('storage', e => {
    if (e.key === 'ideas') {
        ideas = JSON.parse(e.newValue)
        renderIdea(ideas, filters)
    }
})