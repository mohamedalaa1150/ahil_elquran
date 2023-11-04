import React from "react";
import "./Footer.css";

import logo from "../../assets/images/logo.png";

import { BsTelephone } from "react-icons/bs";
import { BsGeoAlt } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import Copyright from "../Copyright/Copyright";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="desc">
          <img src={logo} alt="Logo" />
          <h3>
            أكاديمية أهل القرآن لتعليم القرآن الكريم وعلومه.
            <br /> تعليم القران بمفهومه الواسع بأفضل الوسائل التربوية.
          </h3>
          <div className="details">
            <IconAndText icon={<BsTelephone />} text="01150458003" />
            <IconAndText icon={<BsGeoAlt />} text="القاهرة - مصر" />
            <IconAndText icon={<BsEnvelope />} text="mail@mail.com" />
          </div>
        </div>
        <div className="list">
          <h4>الأكاديمية</h4>
          <ul>
            <li>من نحن</li>
            <li>تسجيل طالب</li>
            <li>انضم لهيئة التدريس</li>
            <li>الخطط الدراسية</li>
            <li>مجلس الإدارة</li>
          </ul>
        </div>
        <div className="list">
          <h4>الموقع</h4>
          <ul>
            <li>القرآن الكريم اونلاين</li>
            <li>مواقيت الصلاة</li>
            <li>أركان الإسلام</li>
            <li>جدول الحصص</li>
            <li>الأسئلة الشائعة</li>
            <li>سياسة الخصوصية</li>
            <li>تواصل معنا</li>
          </ul>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;

const IconAndText = ({ icon, text }) => {
  return (
    <div className="icon-and-text">
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
};
