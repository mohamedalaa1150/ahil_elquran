import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Header.css";
import logo from "../../assets/images/logo.png";

import { RiMenuFill } from "react-icons/ri";

import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const Header = () => {
  const myList = ["من نحن", "الخدمات", "المسابقات", "الفعاليات", "اتصل بنا"];

  const [isClicked, setIsClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // دالة تحديث حجم الشاشة عند تغيير حجم النافذة
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // إضافة مستمع لتغيير حجم النافذة
    window.addEventListener("resize", handleResize);

    // إزالة مستمع تغيير حجم النافذة عند تفريغ المكون
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const list = myList.map((el) => <li key={el}>{el}</li>);
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul
        className="links"
        style={
          windowWidth <= 1199
            ? isClicked
              ? { display: "block" }
              : { display: "none" }
            : { display: "flex" }
        }
      >
        {list}
        {windowWidth <= 1199 ? (
          <div className="button">
            <Button name="إضافة جهة تحفيظ" />
          </div>
        ) : (
          ""
        )}
      </ul>
      {windowWidth > 1199 ? (
        <div className="button">
          <Button name="إضافة جهة تحفيظ" />
        </div>
      ) : (
        ""
      )}
      <span className="icon">
        <lord-icon
          src="https://cdn.lordicon.com/unukghxb.json"
          trigger="hover"
          colors="primary:#e0cfab,secondary:#69b91e"
          style={{
            width: "40px",
            height: "40px",
            display: "block",
          }}
        ></lord-icon>
      </span>
      <span
        className="menu"
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        <RiMenuFill />
      </span>
    </header>
  );
};

export default Header;
