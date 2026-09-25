import InputSenha from "../components/inputsenha";
import Botao from "../components/Botao";
import Footer from "../components/footer";
import "./cadastro.css";
import { FiMail, FiScissors } from 'react-icons/fi';
import { useState } from "react";

function Cadastro() {
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  function Cadastrar(e) {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      console.log("As senhas não são iquais");
      return;
    }

    console.log("As senhas são iguais");
  }

  return (
    <main className="cadastro_container">
      <header className="cadastro_cabecalho">
        <FiScissors className='icone_topo' />
        <h1 className="titulo_cadastro">Cadastro</h1>
        <h2 className="subtitulo_cadastro">Crie a sua conta na barbearia</h2>
      </header>
      <form className="cadastro-form">
        <label>Nome:</label>
        <input type="text" placeholder="Seu Nome" />
        <label>Email:</label>
        <div className="campo_icone">
          <FiMail className='icone_input' />
          <input type="email" placeholder='seuemail@gmail.com' />
        </div>
        <label>Telefone:</label>
        <input type="tel" placeholder="(21) 99999-9999" />
        <label>Senha:</label>
        <InputSenha valor={senha} aoMudar={setSenha} />
        <label>Confirme sua senha:</label>
        <InputSenha valor={confirmarSenha} aoMudar={setConfirmarSenha} />
        <Botao texto="Cadastrar" tipo="submit" aoClicar={Cadastrar} />
      </form>
    </main>
  );
}

export default Cadastro;
