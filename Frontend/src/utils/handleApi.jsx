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
  
const updateTodo = (todoId , text , setText ,  setTodo , setIsUpdating) => {
  fetch(`${baseURL}/update`,{
    method:'PUT',
    headers:{
      'Content-Type' : 'application/json',
    },
    body : JSON.stringify({_id:todoId,text:text}),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data.mesg)
      setText('')
      setIsUpdating(false)
      getAllTodo(setTodo)
    })
    .catch( err => console.error(err))
}

const deleteTodo = (deleteId,setTodo) => {
  fetch(`${baseURL}/delete`,{
    method:'DELETE',
    headers:{
      'Content-Type':'application/json',
    },
    body : JSON.stringify({_id:deleteId})
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      getAllTodo(setTodo)

    })
}

export {getAllTodo,addTodo,updateTodo,deleteTodo}
