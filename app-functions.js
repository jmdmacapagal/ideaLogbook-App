const filters = {
    search: ''
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
        const li = document.createElement('li')
        li.textContent = idea.title
        ideaList.appendChild(li)
    })
}

function generateID() {
     return Math.floor(Math.random() * 999999999999)
}