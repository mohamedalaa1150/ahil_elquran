import React from "react";
import "./Copyright.css";

const name = "Mohamed A.Rahsed";
const year = new Date().getFullYear();

const Copyright = () => {
  return (
    <div className="copyright">
      <div>
        جميع الحقوق محفوظة &copy; <span>أهل القرآن</span>
      </div>
      <div className="name">
        {year} - {name}
      </div>
    </div>
  );
};

export default Copyright;
