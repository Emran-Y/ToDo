import { useEffect, useState } from 'react'
import ToDo from './components/todo'
import { addTodo, getAllTodo , updateTodo , deleteTodo} from './utils/handleApi'

function App() {

  const [todos,setTodos] = useState([])
  const [text,setText] = useState('')
  const [isUpdating,setIsUpdating] = useState(false)
  const [todoId , setTodoId] = useState('')


  const updater = (_id,text) => {
    setTodoId(_id)
    setText(text)
    setIsUpdating(true)
  }

  const deleter = (_id) => {
    deleteTodo(_id,setTodos)
  }

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
        onClick={isUpdating ? 
          (e) => {
          e.preventDefault()
          updateTodo(todoId,text,setText,setTodos,setIsUpdating) 
          }
          :
          (e) => { 
          e.preventDefault()
          addTodo(text,setText,setTodos)
          }
          } 
          className="button" 
          type="submit">
          { isUpdating ? 'Update' : 'Add'}
          </button>
      </form>

      <div className="lists">
        {todos.map(todo => 
        <ToDo 
        key={todo._id} 
        text={todo.text}
        updater = {() => updater(todo._id,todo.text)}
        deleter={() => deleter(todo._id)}
        />)}
      </div>
      
    </div>
  )
}

export default App
