import Footer from "../components/footer"
import "./cadastro.css"
function Cadastro() {
    return (
        <main className="cadastro_container">
            <header className="cadastro_cabecalho">
                <h1 className="titulo_cadastro">Cadastro</h1>
                <h2 className="subtitulo_cadastro">Por favor realize o cadastro caso não tenha uma senha</h2>
            </header>
            <form className="casdastro-form">
                <span>Nome Completo:</span>
                <input type="text" placeholder="Nome"/>
                <span>Email:</span>
                <input type="email" placeholder="Email" />
                <span>Telefone:</span>
                <input type="tel"  placeholder="Telefone"/>
                <span>Senha:</span>
                <input type="password" placeholder="Senha" />
                <span>Corfirme sua senha:</span>
                <input type="password" placeholder="Senha" />
            </form>
            <Footer />
        </main>
    )
}

export default Cadastro
