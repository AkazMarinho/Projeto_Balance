import { useEffect, useState } from 'react'
import style from './Auth.module.css'

import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export function Auth() {

    const {login, errorResponse} = useContext(AuthContext)

    const [inputData, setInputData] = useState({})

    const handlerInsertData = (e) =>{
        setInputData({...inputData, [e.target.name] : e.target.value})
    }

    const submit = () => {
        login(inputData)
    }

  return (
    <div className={style.external}>
        <div className={style.content}>

            <h2>LOGIN</h2>
            <div>
                <label htmlFor="user">Usuário</label>
                <input type="text" name='user' id='user' onChange={handlerInsertData} />
            </div>

            <div>
                <label htmlFor="password">Senha</label>
                <input type="password" name='password' id='password' onChange={handlerInsertData} />
            </div>

            <button onClick={submit} >Enviar</button>
            {errorResponse === 'error' &&
                (
                    <p  className={style.invalid}>Credenciais inválidas!</p>
                )
            }
        </div>
    </div>
  )
}
