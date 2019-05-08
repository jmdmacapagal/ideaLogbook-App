let ideas = []


const ideaJSON = localStorage.getItem('ideas')
if (ideaJSON !== null) {
    ideas = JSON.parse(ideaJSON)
}

const renderIdea = function (ideas) {
    const ideaList = document.querySelector('.list')
    ideaList.innerHTML = ''
    ideas.forEach(idea => {
        const li = document.createElement('li')
        li.textContent = idea.title
        ideaList.appendChild(li)
    })
}

renderIdea(ideas)

document.querySelector('#addForm').addEventListener('submit', e => {
    e.preventDefault()
    ideas.push({
        title: e.target.addIdea.value,
        description: '',
        createdAt: 1,
        updatedAt: 1  
    })
    localStorage.setItem('ideas', JSON.stringify(ideas))
    e.target.addIdea.value = ''
    renderIdea(ideas)
})