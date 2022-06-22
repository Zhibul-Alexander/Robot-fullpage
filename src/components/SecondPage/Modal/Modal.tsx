import React from "react";
import style from "./style.module.css"

type Props = {
    active: boolean,
    setActive: (status: boolean) => void,
}


export const Modal  = (({active, setActive}: Props) => {
    return (
        <div 
        className={active ? style.modalActive : style.modal}
        onClick={() => setActive(false)}>
            <div 
            className={active ? style.contentActive : style.content} 
            onClick={event => event.stopPropagation()}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ck_NgNvT1I4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture autoexit"></iframe> 
            </div>
        </div>
    )
}) 

