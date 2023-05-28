import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux' 
import { addTodo, removeTodo } from './features/todoSlice'
import TodoItem from './TodoItem/TodoItem'

function App() {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()
  const todoList = useSelector(state => state.todo.tasks)

  const handleAdd = () => {
    dispatch(addTodo({
      id: Math.random() * 100,
      title: input,
    }))
  }

  const handleRemove = (id) => {
    dispatch(removeTodo(id))
  }

  return (
    <div>
      <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
      <button onClick={handleAdd}>Add</button>

      {todoList.map(task => (
        <TodoItem key={task.id} id={task.id} title={task.title} remove={handleRemove}/>
      ))}
    </div>
  )
}

export default App
