import React, { useEffect, useState } from "react";
import SeactionHead from "../SeactionHead/SeactionHead";

import { RxCalendar } from "react-icons/rx";
import "./PrayerTimings.css";
import axios from "axios";

// Date higri
function getHijriDate(gregorianDate) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    calendar: "islamic-umalqura",
  };
  return gregorianDate.toLocaleDateString("ar-SA-u-nu-latn", options);
}

const PrayerTimings = () => {
  // Day
  const daysOfWeek = [
    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];
  const today = new Date();
  const dayOfWeek = today.getDay();

  // Time
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      let timePeriod = "ص";

      if (hours >= 12) {
        timePeriod = "م";
        if (hours > 12) {
          hours -= 12;
        }
      }

      hours = hours.toString().padStart(2, "0");
      const timeString =
        hours + ":" + minutes + ":" + seconds + " " + timePeriod;

      setTime(timeString);
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Date
  function getFormattedDate() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const monthNames = [
      "يناير",
      "فبراير",
      "مارس",
      "إبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر",
    ];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();

    return `${day} ${month} ${year}`;
  }
  const formattedDate = getFormattedDate();

  // Date Hegry
  const [formattedHijriDate, setFormattedHijriDate] = useState("");

  useEffect(() => {
    const now = new Date();
    const hijriDate = getHijriDate(now);
    setFormattedHijriDate(hijriDate);
  }, []);

  // Prayers
  const [prayerTimes, setPrayerTimes] = useState({});
  const [city, setCity] = useState("Cairo"); // اسم المدينة
  const [country, setCountry] = useState("Egypt"); // اسم البلد

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await axios.get(
          `http://api.aladhan.com/v1/timingsByCity`,
          {
            params: {
              city: city,
              country: country,
              method: 8, // تعيين طريقة حساب المواقيت
            },
          }
        );
        setPrayerTimes(response.data.data.timings);
      } catch (error) {
        console.error("حدث خطأ في جلب مواقيت الصلاة: ", error);
      }
    };

    fetchPrayerTimes();
  }, [city, country]);

  const formatTime = (time) => {
    const parts = time.split(":");
    const hour = parseInt(parts[0]);
    const minute = parts[1];
    return hour > 12 ? `${hour - 12}:${minute} م` : `${hour}:${minute} ص`;
  };
  return (
    <div className="prayer-timings">
      <SeactionHead title="مواقيت الصلاة" subtitle="مواقيت الصلاة للمسلمين" />
      <div className="time-section">
        <div className="day">
          <RxCalendar />
          <p>{daysOfWeek[dayOfWeek]}</p>
        </div>
        <div className="date">
          <span>{`${formattedDate} م`}</span>
          <span>{`${formattedHijriDate}`}</span>
        </div>
        <h2>مواقيت الصلاة في القاهرة - مصر</h2>
        <p>الساعة الآن {time}</p>
        <div className="prayer">
          <div className="prayer-card">
            <h3>الفجر</h3>
            <span>
              {prayerTimes.Fajr ? formatTime(prayerTimes.Fajr) : "غير متاح"}
            </span>
          </div>
          <div className="prayer-card">
            <h3>الشروق</h3>
            <span>
              {prayerTimes.Fajr ? formatTime(prayerTimes.Sunrise) : "غير متاح"}
            </span>
          </div>
          <div className="prayer-card">
            <h3>الظهر</h3>
            <span>
              {prayerTimes.Fajr ? formatTime(prayerTimes.Dhuhr) : "غير متاح"}
            </span>
          </div>
          <div className="prayer-card">
            <h3>العصر</h3>
            <span>
              {prayerTimes.Fajr ? formatTime(prayerTimes.Asr) : "غير متاح"}
            </span>
          </div>
          <div className="prayer-card">
            <h3>المغرب</h3>
            <span>
              {prayerTimes.Fajr ? formatTime(prayerTimes.Maghrib) : "غير متاح"}
            </span>
          </div>
          <div className="prayer-card">
            <h3>العشاء</h3>
            <span>
              {prayerTimes.Fajr ? formatTime(prayerTimes.Isha) : "غير متاح"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerTimings;
