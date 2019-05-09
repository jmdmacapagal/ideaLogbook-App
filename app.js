let ideas = localStorageData()
const filters = {
    search: '',
    sortBy: 'byEdited'
}

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
    renderIdea(ideas, filters)
})

window.addEventListener('storage', e => {
    if (e.key === 'ideas') {
        ideas = JSON.parse(e.newValue)
        renderIdea(ideas, filters)
    }
})