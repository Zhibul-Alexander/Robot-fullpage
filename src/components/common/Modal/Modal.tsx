import React, { ReactNode } from "react";
import style from "./style.module.css";

type Props = {
  active: boolean;
  setActive: (status: boolean) => void;
  children: ReactNode;
};

export const Modal = ({ active, setActive, children }: Props) => {
  return (
    <div
      className={active ? style.modalActive : style.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? style.contentActive : style.content}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
