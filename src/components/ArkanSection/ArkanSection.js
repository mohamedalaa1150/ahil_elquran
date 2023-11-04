import React from "react";
import "./ArkanSection.css";
import SeactionHead from "../SeactionHead/SeactionHead";

import img1 from "../../assets/images/Asset 10.png";
import img2 from "../../assets/images/Asset 11.png";
import img3 from "../../assets/images/Asset 12.png";
import img4 from "../../assets/images/Asset 13.png";
import img5 from "../../assets/images/Asset 14.png";
import Card from "../Card/Card";

const ArkanSection = () => {
  return (
    <div className="arkan-eleslam">
      <SeactionHead title="أركان الإسلام" subtitle="أركان الإسلام الخمسة" />
      <p className="discription">
        مصطلح إسلامي، يطلق على الأسس الخمس التي يبني عليها دين الإسلام ويدل
        عليها حديث "بني الإسلام على خمس" ووردت في الأحاديث النبوية بصيغ متعددة
        ،وهى
      </p>
      <div className="cards">
        <Card img={img1} title="الشهادتين" subTitle="عقيدة" />
        <Card img={img2} title="إقام الصلاة" subTitle="صلاة" />
        <Card img={img3} title="إيتاء الذكاء" subTitle="صدقة" />
        <Card img={img4} title="صوم شهر رمضان" subTitle="صوم" />
        <Card img={img5} title="حج البيت" subTitle="أدى فريضة الحج" />
      </div>
    </div>
  );
};

export default ArkanSection;
