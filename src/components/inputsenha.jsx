import { useState } from 'react';
import './inputsenha.css';

function InputSenha() {

    const [mostrarSenha, setMostrarSenha] = useState(false)
    const [senha, setSenha] = useState("")

    function alternarSenha() {

        setMostrarSenha(!mostrarSenha);
    }
    return (

        <div className='input_senha'>
            <input type={mostrarSenha ? 'text' : 'password'} placeholder='senha' value={senha} onChange={(e) => setSenha(e.target.value)}></input>
            <span onClick={alternarSenha}>👁️</span>
        </div>

    );
}

export default InputSenha
