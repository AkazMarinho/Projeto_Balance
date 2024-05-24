
import style from './Upside.module.css'
import logoBalance from '../img/balance.png'

import { ImExit } from "react-icons/im";

export function Upside() {

  return (
    <div className={style.content}>
        <img src={logoBalance} alt="" />

        <div className={style.exit} onClick={()=>{
          localStorage.removeItem("b3Cd8E5gHiJ2kLmN9oPqR6sTuV4wXyZ7" )
          localStorage.removeItem("a2Bc9E4fGhI1jKlM7nOpQr3tUvX5wYz8" )
          window.location.reload();
        }}>
          <ImExit />
        </div>
    </div>
  )
}
