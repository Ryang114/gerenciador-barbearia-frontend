import { useState } from "react";
import { FiScissors, FiCalendar, FiPlus, FiStar, FiClock, FiUser, FiHome } from "react-icons/fi";
import './homeusuario.css';
import Footer from "../components/footer";

function Homeusuario() {

        const [usuario, SetUsuario] = useState("");
        function Aparecernomedosuario(){
                
                                  /*fluxo - LOGICA 
             Isso so vai acontecer depois que o usuairo se cadastrar no banco de dados pois so fuciona depois que o usuario se cadastrar, o usuario ta cadastrado no sistema,ai belez quando usuario acessar a pagina home do usuario o nome que ele cadastro no cadastro vai aparecer na frse de saldação TIPO "Olá [nome_do_usuario]" então eu acho que teria que ter uma const = nome para isso  


                USUARIO CADASTRADO => USUARIO FAZ O LOGIN => A VARIAVEL NOME QUE ESTA NO VAI VIR PARA O H2 */

        };

        return (
                <main className="homeusuario_container">
                        <header className="homeusuario_cabecalho">
                                <FiScissors className="icone_topo" />
                                <h1 className="titulo_usuario">Olá Ryan</h1>k
                                <h2 className="subtitulo_usuario">Seja bem vindo de volta</h2>
                        </header>

                        <span>Proximo agendamento</span>
                        <label className="ficha_agendamento">
                               
                        </label>

                        <section className="servicos">

                                <button className="sevico">Corte Tesoura<span className="preco">R$35,00</span></button>
                                <button className="servico">Corte Maquina<span className="preco">R$25,00</span></button>
                                <button className="sevico">Nevou<span className="preco">R$50,00</span></button>
                                <button className="servico"><span className="preco"></span></button>
                                <button className="servico"><span className="preco"></span></button>
                        </section>
                        <nav className="nav_inferior">
                                <FiHome className="nav_icone nav ativo" />
                                <FiCalendar className="nav_icone" />
                                <FiUser className="nav_icone" />
                        </nav>
                        <Footer />
                </main>












        );
};

export default Homeusuario;