import Footer from '../components/footer';
import Botao from '../components/Botao';
import Inputsenha from '../components/inputsenha';
import './login.css'
import { FiMail, FiScissors } from 'react-icons/fi';
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
                <FiScissors className='icone_topo' />
                <h1 className='titulo'>Login</h1>
                <h2 className='subtitulo-login'>Seja bem vindo a nossa barbearia</h2>kk
            </header>

            <form className='login-form'>
                <label>Email:</label>
                <div className='campo_icone'>
                    <FiMail className='icone_input' />
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <label>Senha:</label>
                <Inputsenha valor={senha} aoMudar={setSenha} />
                {mensagem && <p className='mensagem_login'>{mensagem}</p>}
                <Botao texto='Entrar' tipo='submit' aoClicar={FazerLogin} />
              <p className='link_cadastro'>Não tem conta?<span className='destaque'> Cadastre-se</span></p>
            </form>
            <Footer />
        </main>

    );
}
export default Login