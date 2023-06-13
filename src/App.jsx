import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Pages/Login/Login'
import AppMenu from './Pages/AppMenu/AppMenu'
import Home from './Pages/Home/Home'
import Users from './Pages/Home/Users/Users'
import MyInfo from './Pages/Home/MyInfo/MyInfo'
import NotFound from './Pages/NotFound/NotFound'
import UserData from './Pages/Home/Users/UserData/UserData'
import UserDetail from './Pages/Home/Users/UserDetail/UserDetail'

function App() {

  return (
    <div className='w-screen h-screen bg-pink-200'>
    <Routes>
      <Route path='login' element={<Login />}/>

      <Route path='app' element={<AppMenu />}>
        <Route index element={<Home />}/>

        <Route path='users' element={<Users />}>
          <Route index element={<UserData />}/>
          <Route path=':userId' element={<UserDetail />}/>
          <Route path='*' element={<NotFound />} />
        </Route>

        <Route path='my-info' element={<MyInfo />}/>
        <Route path='*' element={<NotFound />}/>
      </Route>
      {/* <Route path='*' element={<NotFound />}/> */}
      <Route path='*' element={<Navigate to='/login' replace />}/>
    </Routes>
    </div>
  )
}

export default App
