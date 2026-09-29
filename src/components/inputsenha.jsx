import { useState } from 'react';
import './inputsenha.css';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function InputSenha(props) {

    const [mostrarSenha, setMostrarSenha] = useState(false)
    

    function alternarSenha() {

        setMostrarSenha(!mostrarSenha);
    }
    return (

        <div className='input_senha'>
            <input type={mostrarSenha ? 'text' : 'password'} placeholder='senha' value={props.valor} onChange={(e) => props.aoMudar(e.target.value)}></input>
            <span onClick={alternarSenha}>
                {mostrarSenha ?<FiEyeOff /> : <FiEye />}
            </span>
        </div>

    );
}

export default InputSenha
