import React from 'react'

export default function Input({ inputText }) {
  return (
    <input type="text" className='w-2/3 h-4 px-1 py-3 flex-1 bg-slate-100 focus:outline-none focus:outline-sky-500 rounded focus:rounded ' placeholder={inputText}/>
  )
}
