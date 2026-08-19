import './botao.css'
function Botao(props) {
    return (
        <button className="botao" type={props.tipo} onClick={props.aoClicar}>
            {props.texto}
        </button>
    );
}

export default Botao;