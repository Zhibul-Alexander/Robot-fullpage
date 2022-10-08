import React, { useState } from "react";

import style from "./style.module.css";

import { Modal } from "../common/Modal/index";

export const SecondPage = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={style.container}>
      <div>
        <button className={style.button} onClick={() => setModalActive(true)}>
          <span className={style.span}></span>
        </button>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <iframe
          width="570"
          height="320"
          src="https://www.youtube.com/embed/ck_NgNvT1I4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture autoexit"
          style={{  borderRadius: "12px", border: "1px solid transparent"}}
        ></iframe>
      </Modal>
    </div>
  );
};
