const ideas = [
    {
        title: 'new start-up idea',
        description: 'lorem ipsum',
        createdAt: 1,
        updatedAt: 1
    },
    {
        title: 'new start-up idea',
        description: 'lorem ipsum',
        createdAt: 2,
        updatedAt: 2
    },
    {
        title: 'new start-up idea',
        description: 'lorem ipsum',
        createdAt: 3,
        updatedAt: 3
    },

]

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
    e.target.addIdea.value = ''
    renderIdea(ideas)
})