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

function removeIdea(id) {
    const index = ideas.findIndex(idea => {
        return idea.id === id
    })

    if (index > -1) {
        ideas.splice(index, 1)
    }
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

function updateIdea(ideas) {
    let idea = ideas.find(function (idea) {
        return idea.id == ideaId
    })

    if (idea === undefined) {
        location.assign('../index.html')
    }

    ideaTitle.value = idea.title
    ideaDescription.value = idea.description

    ideaTitle.addEventListener('input', e => {
        idea.title = e.target.value
        idea.updatedAt = generateTimestamp()
        saveIdea(ideas)
    })

    ideaDescription.addEventListener('input', e => {
        idea.description = e.target.value
        idea.updatedAt = generateTimestamp()
        saveIdea(ideas)
    })
}

function generateIdeaList(idea) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.textContent = idea.title
    a.setAttribute('href', `/views/edit.html#${idea.id}`)
    li.appendChild(a)
    return li
}


function generateID() {
     return Math.floor(Math.random() * 999999999999)
}

function generateTimestamp() {
    const now = moment().valueOf()
    return now
}