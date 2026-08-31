import InputSenha from "../components/inputsenha"
import Botao from "../components/Botao"
import Footer from "../components/footer"
import "./cadastro.css"
import { useState } from "react"



function Cadastro() {

    const [senha, setSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")

    function k

    return (
        <main className="cadastro_container">
            <header className="cadastro_cabecalho">
                <h1 className="titulo_cadastro">Cadastro</h1>
                <h2 className="subtitulo_cadastro">Por favor realize o cadastro caso não tenha uma senha</h2>
            </header>
            <form className="cadastro-form">
                <span>Nome Completo:</span>
                <input type="text" placeholder="Nome" />
                <span>Email:</span>
                <input type="email" placeholder="Email" />
                <span>Telefone:</span>
                <input type="tel" placeholder="Telefone" />
                <span>Senha:</span>
                <InputSenha />
                <span>Corfirme sua senha:</span>
                <InputSenha />
                <Botao texto="Cadastrar" tipo="submit" />
            </form>
            <Footer />
        </main>
    )
}

export default Cadastro
