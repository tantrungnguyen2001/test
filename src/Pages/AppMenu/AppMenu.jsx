import React, { useState } from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import Users from '../Home/Users/Users';
import MyInfo from '../Home/MyInfo/MyInfo';

export default function AppMenu() {
  const [isHidden, setIsHidden] = useState(false)

  const handleHidden = () => {
    setIsHidden(!isHidden)
  }

  return (
    <div className='w-screen h-screen flex flex-col justify-between'>
    
    {/* Header */}
    <div className="w-screen h-14 bg-white flex justify-between items-center relative border-b-2 border-black">
      <Link to='/app' className='h-full ml-2 cursor-pointer'>
        <img 
          src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/72db83902e7a0ab01d5f8cc6155aec46.png"
          className='h-full ml-2 cursor-pointer'
        />
      </Link>
      <img 
        src="https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png"
        className='h-3/4 mr-8 cursor-pointer'
        onClick={handleHidden}
      />
      {isHidden && 
        <div className="absolute top-14 right-8 w-32 bg-white drop-shadow text-center rounded cursor-pointer overflow-hidden">
          <p className='hover:bg-sky-500 h-8'>Name</p>
          <Link to='/login'><p className='hover:bg-red-500 h-8 hover:font-semibold'>Logout</p></Link>
        </div>
      }
    </div>
    
    {/* Middle */}
    <div className="flex-1 flex items-center">
      <div className=" w-1/5 h-full border-r-2 border-black">
        <div className='flex flex-col mt-4'>
          <Link
            className='hover:bg-sky-500 pl-8 py-2'
            to=''>Home</Link>
          <Link
            className='hover:bg-sky-500 pl-8 py-2'
            to='users'>Users</Link>
          <Link
            className='hover:bg-sky-500 pl-8 py-2'
            to='my-info'>My info</Link>
        </div>
      </div>
      <div className=" flex-1 h-full bg-slate-100 flex">
        <Outlet /> 
      </div>
    </div>

    {/* Footer */}
    <div className="w-screen h-14 bg-white flex items-center pl-4 border-t-2 border-black">Zigvy Corp</div>
    </div>
  )
}
