let ideas = localStorageData()


renderIdea(ideas, filters)

document.querySelector('#addButton').addEventListener('click', e => {
    location.assign(`./views/add.html`)
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