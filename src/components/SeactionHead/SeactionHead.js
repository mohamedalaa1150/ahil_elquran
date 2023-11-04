import React from "react";

import style from "./SeactionHead.module.css";

const SeactionHead = ({ title, subtitle }) => {
  return (
    <div className="section-head">
      <p className={style.title}>{title}</p>
      <h2 className={style.subtitle}>{subtitle}</h2>
    </div>
  );
};

export default SeactionHead;
