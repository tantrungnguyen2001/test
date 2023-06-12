import React, { useState } from 'react'
import TodoList from '../TodoList/TodoList'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../Features/TodoSlices'

export default function TodoForm() {
  const [input, setInput] = useState('')
  const [search, setSearch] = useState('')
  const [checked, setChecked] = useState(false)

  const dispatch = useDispatch()

  const handleAdd = () => {
    if(input.length === 0) return
    dispatch(addTodo({
      id: Date.now(),
      title: input,
      completed: false
    }))
    setInput('')
  }

  return (
    <div className='w-[30%] h-[70%] bg-black rounded overflow-auto flex flex-col'>
      <div className='flex flex-col top-10'>
        <input 
          type="text" 
          placeholder='Search...'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <input 
          type="text" 
          placeholder='Add...'
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button 
          className='bg-green-300 text-black hover:opacity-50'
          onClick={handleAdd}
        >Add</button>
        <div className='flex items-center justify-center'>
          <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
          <div className='ml-2'>Show Completed</div>
        </div>
      </div>

      <TodoList search={search} checked={checked}/>
    </div>
  )
} 
