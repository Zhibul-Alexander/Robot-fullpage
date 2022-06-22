import React, {useState} from "react"

import style from "./style.module.css"

import {Modal} from './Modal/index'

export const SecondPage = () => {

    const [modalActive, setModalActive] = useState(false)

   return (
       <div className={style.container}>
            <div>
                <button className={style.button} onClick={() => setModalActive(true)}>
                    <span className={style.span}></span>
                </button>
            </div>
            <Modal active={modalActive} setActive={setModalActive}/>
       </div>
   )
}
