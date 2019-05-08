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