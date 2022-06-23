import React from "react";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

import { VIDEO_SRC } from "../constant/index";
import style from "./style.module.css";

const Bounce = styled.div`
  animation: 2s ${keyframes`${bounce}`} infinite;
`;

export const FirstPage = () => {
  return (
    <div className={style.container}>
      <div className={style.blackout}></div>
      <video
        className={style.video}
        src={VIDEO_SRC.FIRST_PAGE}
        autoPlay
        loop
        muted
      />
      <div className={style.content}>
        <Bounce>
          <h1 className={style.title}>Welcome, to the Gaming Site!</h1>
        </Bounce>
        <p className={style.text}>Do you like to play computer games?</p>
        <div className={style.blockButton}>
          <button className={style.button}>Yes</button>
          <button className={style.button}>No</button>
        </div>
      </div>
    </div>
  );
};
