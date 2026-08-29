import Footer from '../components/footer';
import Botao from '../components/Botao';
import Inputsenha from '../components/inputsenha';
import './login.css'
import { useState } from 'react';


function Login() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [mensagem, setMensagem] = useState("")

    function FazerLogin(e) {
        e.preventDefault();
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email: email, senha: senha })
        })
            .then((resposta) => resposta.json())
            .then((dados) => {
                console.log("Resposta do backend", dados)
                setMensagem(dados.message)
            })

        console.log("Email:", email)
        console.log("Senha", senha)
        setMensagem('Tentando entrar com o email ' + email);
    }

    return (

        <main className='login-container'>
            <header className='login-cabecalho'>
                <h1 className='titulo'>Login</h1>
                <h2 className='subtitulo-login'>Seja bem vindo a nossa barbearia</h2>
            </header>

            <form className='login-form'>
                <span>Email:</span>
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <span>Senha:</span>
                <Inputsenha valor={senha} aoMudar={setSenha} />
                {mensagem && <p className='mensagem_login'>{mensagem}</p>}
                <Botao texto='Entrar' tipo='submit' aoClicar={FazerLogin} />
            </form>
            <Footer />
        </main>

    );
}
export default Login