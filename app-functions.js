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

function renderIdea(ideas) {
    const ideaList = document.querySelector('.list')
    ideaList.innerHTML = ''
    ideas.forEach(idea => {
        const li = document.createElement('li')
        li.textContent = idea.title
        ideaList.appendChild(li)
    })
}