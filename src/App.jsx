import { useState } from 'react'
import './App.css'
import Botao from './components/Botao'
import Login from './pages/login'

function App() {
  function TestarClick(){
    alert("Voce clicou no botão");
  }
  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>k
          <Botao texto="salvar" aoClicar={TestarClick}/>{/*aqui*/}<br/>
          <Botao texto="Cancelar"/>{/*aqui*/}<br/>
          <Botao texto="confirmar agendamento"/>{/*aqui*/}
        </div>
      </section>
      <Login/>
    </>
  )
}

export default App
