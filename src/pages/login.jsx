import Footer from '../components/footer';
import Botao from '../components/Botao';
import './login.css'

function Login() {

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
                <input type='password' placeholder='Senha'></input>
                <Botao texto='Entrar' tipo='submit' />
            </form>

            <Footer />
        </main>

    );
}
export default Login