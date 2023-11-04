import React from "react";

import "./Email.css";

const Email = () => {
  return (
    <div className="email-section">
      <p>اخر الاخبار عبر</p>
      <div className="email">
        <span>القائمة البريدية</span>
        <div className="input-and-button">
          <input type="text" placeholder="ضع بريدك الإلكتروني" />
          <button>اشترك</button>
        </div>
      </div>
    </div>
  );
};

export default Email;
