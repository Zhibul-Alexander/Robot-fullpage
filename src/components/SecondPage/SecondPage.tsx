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
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ck_NgNvT1I4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture autoexit"
        ></iframe>
      </Modal>
    </div>
  );
};
