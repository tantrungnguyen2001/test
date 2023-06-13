import React from 'react'

export default function Button({ buttonText }) {
  return (
    <button className='bg-sky-500 p-2 rounded hover:bg-pink-200 hover:text-white'>{buttonText}</button>
  )
}
