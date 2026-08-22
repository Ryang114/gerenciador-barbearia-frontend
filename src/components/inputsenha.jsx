import { useState } from 'react';
import './inputsenha.css';

function InputSenha() {

    const [mostrarSenha, setMostrarSenha] = useState(false)

    function alternarSenha() {

        setMostrarSenha (!mostrarSenha);
    }
    return (

        <div className='input_senha'>
            <input type={mostrarSenha ? 'text' : 'password'} placeholder='senha'></input>
            <span onClick={alternarSenha}>👁️</span>
        </div>

    );
}

export default InputSenha
