import React from "react";
import style from "./Button.module.css";

const Button = ({ name }) => {
  return <div className={style.myBtn}>{name}</div>;
};

export const ButtonOutLine = ({ name }) => {
  return <div className={style.myBtnOutLine}>{name}</div>;
};

export default Button;
