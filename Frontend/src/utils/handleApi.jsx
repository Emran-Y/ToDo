const baseURL = 'http://localhost:5000'

const getAllTodo = (setTodo) => {
  fetch(baseURL)
    .then(response => response.json())
    .then(data => setTodo(data))
    .catch(error => console.error('Error fetching todos:', error.message))
}

const addTodo = (text, setText, setTodo) => {
  
    fetch(`${baseURL}/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({text}),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Todo added successfully:', data)
        setText('')
        getAllTodo(setTodo)
      })
      .catch(error => console.error('Error adding todo:', error.message))
  }
  

export {getAllTodo,addTodo}
