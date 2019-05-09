const filters = {
    search: '',
    sortBy: ''
}

function localStorageData(ideas) {
    const ideaJSON = localStorage.getItem('ideas')
    if (ideaJSON !== null) {
        return ideas = JSON.parse(ideaJSON)
    } else {
        return []
    }
}

function saveIdea(idea) {
    localStorage.setItem('ideas', JSON.stringify(idea))
}

function renderIdea(ideas, filters) {
    const ideaList = document.querySelector('.list')
  
    const filteredIdeas = ideas.filter(idea => {
        return idea.title.toLowerCase().includes(filters.search.toLowerCase())
    })
    ideaList.innerHTML = ''
    filteredIdeas.forEach(idea => {
        ideaList.appendChild(generateIdeaList(idea))
    })
}

function generateIdeaList(idea) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.textContent = idea.title
    a.setAttribute('href', `/views/add-edit-idea.html#${idea.id}`)
    li.appendChild(a)
    return li
}


function generateID() {
     return Math.floor(Math.random() * 999999999999)
}