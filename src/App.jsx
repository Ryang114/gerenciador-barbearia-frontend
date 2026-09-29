import { useState } from 'react'
import './App.css'
import Login from './pages/login'
import { Navigate,Routes,Route } from 'react-router-dom'
import Cadastro from './pages/cadastro'
import Homeusuario from './pages/homeusuario'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cadastro' element={<Cadastro/>} />
      <Route path='/homeusuario' element={<Homeusuario />} />
    </Routes>
  )
}

export default App
