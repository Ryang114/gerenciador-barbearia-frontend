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
        console.log("Email:", email)
        console.log("Senha", senha)
        setMensagem('Tentando entrar com o email' + email);
    }

    return (

        <main className='login-container'>
            <header className='login-cabecalho'>
                <h1 className='titulo'>Login</h1>
                <h2 className='subtitulo-login'>Seja bem vindo a nossa barbearia</h2>
            </header>

            <form className='login-form'>
                <span>Email:</span>kk
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <span>Senha:</span>
                <Inputsenha valor={senha} aoMudar={setSenha} />
                <Botao texto='Entrar' tipo='submit' aoClicar={FazerLogin} />
            </form>
            {mensagem && <p style={{ color: 'white' }}>{mensagem}</p>}
            <Footer />
        </main>

    );
}
export default Login