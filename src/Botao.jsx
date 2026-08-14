import './botao.css'
function Botao(props) {
    return (
        <button className="botao" onClick={props.aoClicar}>
            {props.texto}
        </button>
    );
}

export default Botao;