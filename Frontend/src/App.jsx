import { useEffect, useState } from 'react'
import ToDo from './components/todo'
import { addTodo, getAllTodo } from './utils/handleApi'

function App() {

  const [todos,setTodos] = useState([])
  const [text,setText] = useState('')

  useEffect(() => {
    getAllTodo(setTodos)
  },[])

  return (


    <div className="App">
      <h1 className="main-title">ToDo App</h1>
      <form>
        <input 
        placeholder="Add ToDos" 
        className="input" 
        type="text" 
        value={text}
        onChange={e => setText(e.target.value)}
        />
        <button 
        onClick={(e) =>{ 
          e.preventDefault()
          addTodo(text,setText,setTodos)
          }} 
          className="button" 
          type="submit">
          Add
          </button>
      </form>

      <div className="lists">
        {todos.map(todo => <ToDo key={todo._id} text={todo.text}/>)}
      </div>
      
    </div>
  )
}

export default App
