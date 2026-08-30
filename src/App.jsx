import { useState } from 'react'
import './App.css'
import Login from './pages/login'
import { Navigate,Routes,Route } from 'react-router-dom'
import Cadastro from './pages/cadastro'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cadastro' element={<Cadastro/>} />
    </Routes>
  )
}

export default App
