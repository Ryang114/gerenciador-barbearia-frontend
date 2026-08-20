import Footer from '../components/footer';
import Botao from '../components/Botao';
import './login.css'
import { useState } from 'react';

function Login() {

    const [mostrarSenha, setMostrarSenha] = useState (false)

    function MostrarSenha() {

        setMostrarSenha(!MostrarSenha);

    }

    return (

        <main className='login-container'>
            <header className='login-cabecalho'>
                <h1 className='titulo'>Login</h1>
                <h2 className='subtitulo-login'>Seja bem vindo a nossa barbearia</h2>
            </header>

            <form className='login-form'>
                <span>Email:</span>
                <input type="email" placeholder='Email' />
                <span>Senha:</span>
                <input type={mostrarSenha ? 'text' : 'password' } placeholder='senha'></input>
                <Botao texto='Entrar' tipo='submit' />
            </form>

            <Footer />
        </main>

    );
}
export default Login