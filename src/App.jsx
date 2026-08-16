import { useState } from 'react'
import './App.css'
import Login from './pages/login'
import { Navigate,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
