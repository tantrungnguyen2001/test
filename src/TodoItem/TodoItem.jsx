import React from 'react'
import './TodoItem.css'

export default function TodoItem({id, title, remove}) {
  const deleteTodo = () => {
    remove(id);
  };
  return (
    <div key={id} >{title}
      <button onClick={deleteTodo}>x</button>
    </div>
  )
}
