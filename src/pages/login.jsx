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
                <button type="submit">Entrar</button>
            </form>

            <footer className='login-footer'>
                <p>&copy; 2026 Todos os direitos reservados</p>
            </footer>
        </main>

    );
}
export default Login