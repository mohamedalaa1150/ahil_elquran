import React from "react";

import "./Card.css";

const Card = ({ img, title, subTitle }) => {
  return (
    <div className="card-img">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{subTitle}</p>
    </div>
  );
};

export default Card;
