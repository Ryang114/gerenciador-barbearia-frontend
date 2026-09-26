import { useState } from "react";
import { FiScissors, FiCalendar, FiPlus, FiStar, FiClock, FiUser, FiHome } from "react-icons/fi";
import Footer from "../components/footer";



function Homeusuario() {
        return (
                <main className="homeusuario_container">
                        <header className="home_usuario_cabecalho">
                                <FiScissors className="icone_topo" />
                                <h1 className="titulo_usuario">Olá Ryan</h1>
                                <h2 className="subtitulo_usario">Seja bem vindo de volta</h2>
                        </header>

                        <span>Proximo agendamento</span>
                        <label className="ficha_agendamento">
                                */infomaçoes do que ele agendou\*
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