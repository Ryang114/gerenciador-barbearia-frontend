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
                <input type="Email" placeholder='Email' />
                <span>Senha</span>
                <input type='passsoword' placeholder='Senha'></input>
                <button type="submit">Entrar</button>
            </form>
        </main>
    );
}
export default Login