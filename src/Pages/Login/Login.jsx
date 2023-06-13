import React from 'react'
import Button from '../../Component/Button/Button'
import Input from '../../Component/Input/Input'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='w-1/2 h-1/2 bg-white rounded relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className=" w-3/4 h-1/3 flex justify-between flex-col m-auto relative top-3/4 -translate-y-3/4">
        <div className="flex items-center justify-between">
          <p className='text-center w-1/3'>Email</p>
          <Input inputText='Enter your email...'/>
        </div>
        <div className="flex items-center justify-between">
          <p className='text-center w-1/3'>Password</p>
          <Input inputText='Enter your password...'/>
        </div>
        <div className="flex items-center">
          <div className="w-1/3"></div>
          <div className="flex-1 flex justify-between">
            <Link to='/app'><Button buttonText='Submit'/></Link>
            <Button buttonText='Register'/>
          </div>
        </div>
      </div>
    </div>
  )
}
