import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

export default function Users() {
  return (
    <>
      <ul className='w-1/4 h-full border-r-2 border-black pt-6'>
        <Link to='1'> <li className='hover:bg-sky-500 cursor-pointer pl-8 py-2'>John Smith {'>'}</li></Link>
        <Link to='2'> <li className='hover:bg-sky-500 cursor-pointer pl-8 py-2'>John Smith {'>'}</li></Link>
        <Link to='3'> <li className='hover:bg-sky-500 cursor-pointer pl-8 py-2'>John Smith {'>'}</li></Link>
        <Link to='4'> <li className='hover:bg-sky-500 cursor-pointer pl-8 py-2'>John Smith {'>'}</li></Link>
      </ul>
      <div className="flex-1">
        <Outlet />
      </div>
    </>
  )
}
