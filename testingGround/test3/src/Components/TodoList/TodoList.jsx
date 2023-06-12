import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, editTodo, toggleTodo } from '../../Features/TodoSlices'

export default function TodoList({ search, checked }) {
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState(null)
  const [toggle, setToggle] = useState(null)

  const [updatedTitle, setUpdatedTitle] = useState('')

  const dispatch = useDispatch()
  const todosList = useSelector(state => state.todos.tasks)

  return (
    <div>
      {todosList
      .filter(todo => {
        return search.length === 0 ? todo : todo.title.toLowerCase().includes(search.toLowerCase())
      })
      .filter(todo => {
        if(!checked) return todo
        else {
          return todo.completed === checked
        }
      })
      .map((todo) => {
        return <div key={todo.id} className='my-1 mx-2'>
          <div className='flex mt-4'>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => {
                setToggle(todo.id)
                dispatch(toggleTodo({id: todo.id, completed: todo.completed}))
              }} />
            <p className='flex-1 ml-2'>{todo.title}</p>
            <button 
              className='bg-green-300 px-2 rounded hover:opacity-50 mr-2 text-black'
              onClick={() => {
                setEdit(true)
                setId(todo.id)
              }}
            >Edit</button>
            <button onClick={() => dispatch(deleteTodo(todo.id))} className='bg-red-500 px-2 rounded hover:opacity-50'>&times;</button>
          </div>
          {edit && id === todo.id && (
          <div className='flex mt-2'>
            <input 
              type="text" 
              placeholder='Updated title' 
              className='flex-1 mr-2' 
              value={updatedTitle} 
              onChange={e => setUpdatedTitle(e.target.value)}/>
            <button 
              className='w-[18%] bg-green-300 rounded text-black hover:opacity-50' 
              onClick={() => {
                if(updatedTitle.length === 0) return
                dispatch(editTodo({id: todo.id, title: updatedTitle}))
                setUpdatedTitle('')
                setEdit(false)
              }}>Update</button>
          </div>
          )}
        </div>
      })}      
    </div>
  )
}
