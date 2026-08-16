import './login.css'

function Login() {

    return (
        <div>
                <h1 className="titulo">Login</h1>
                <h2 className="subtitulo-login">Olá seja bem vindo! Por favor, faça seu login.</h2>
        </div>

        <form className= "formulorio-login">
            <input type="email" placeholder= "Email"  />
            <input type="password" placeholder="Senha" />
            <button type="submit">Entrar</button>
        </form>
    );
}

export default Login