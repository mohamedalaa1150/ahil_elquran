import React from "react";
import "./Landing.css";
import Header from "../Header/Header";

import man from "../../assets/images/man.png";
import Button, { ButtonOutLine } from "../Button/Button";

const Landing = () => {
  return (
    <div className="landing-site">
      <Header />
      <div className="landing-body">
        <div className="landing-img">
          <img src={man} alt="Man" />
        </div>
        <div className="landing-info">
          <h1>هل انت مستعد للتعلم؟</h1>
          <p>
            القرآن هو النص الديني المركزي للإسلام. القرآن هو كتاب الهداية
            والتوجيه الإلهي للبشرية. اكادمية أهل القرآن لحفظ وضبط القرآن الكريم
            طريقك نحو السعادة التي لا تنتهي.
          </p>
          <div className="landing-btn">
            <Button name="قراءة القرآن" />
            <ButtonOutLine name="مواقيت الصلاة" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
