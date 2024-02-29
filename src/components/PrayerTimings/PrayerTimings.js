import React, { useEffect, useState } from "react";
import SeactionHead from "../SeactionHead/SeactionHead";

import { RxCalendar } from "react-icons/rx";
import "./PrayerTimings.css";
import axios from "axios";

// Constant values
const DAYS_OF_WEEK = [
  "الأحد",
  "الاثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
];
const MONTH_NAMES = [
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
  // State variables
  const [time, setTime] = useState("");
  const [formattedHijriDate, setFormattedHijriDate] = useState("");
  const [prayerTimes, setPrayerTimes] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Effects
  useEffect(() => {
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const now = new Date();
    const hijriDate = getHijriDate(now);
    setFormattedHijriDate(hijriDate);
  }, []);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.aladhan.com/v1/timingsByCity`,
          {
            params: {
              city: "Cairo", // اسم المدينة
              country: "Egypt", // اسم البلد
              method: 8, // تعيين طريقة حساب المواقيت
            },
          }
        );
        setPrayerTimes(response.data.data.timings);
        setIsLoading(false);
      } catch (error) {
        setError("حدث خطأ في جلب مواقيت الصلاة.");
        setIsLoading(false);
      }
    };

    fetchPrayerTimes();
  }, []);

  // Helper functions
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

    hours = hours === 0 ? 12 : hours; // تعديل الساعة 0 إلى 12 في نظام 12 ساعة

    const formattedTime = `${hours}:${minutes}:${seconds} ${timePeriod}`;
    setTime(formattedTime);
  };

  const formatTime = (time) => {
    const parts = time.split(":");
    const hour = parseInt(parts[0]);
    const minute = parts[1];
    return hour > 12 ? `${hour - 12}:${minute} م` : `${hour}:${minute} ص`;
  };

  const getFormattedDate = () => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const month = MONTH_NAMES[now.getMonth()];
    const year = now.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="prayer-timings">
      <SeactionHead title="مواقيت الصلاة" subtitle="مواقيت الصلاة للمسلمين" />
      <div className="time-section">
        <div className="day">
          <RxCalendar />
          <p>{DAYS_OF_WEEK[new Date().getDay()]}</p>
        </div>
        <div className="date">
          <span>{`${getFormattedDate()} م`}</span>
          <span>{formattedHijriDate}</span>
        </div>
        <h2>مواقيت الصلاة في القاهرة - مصر</h2>
        <p>الساعة الآن {time}</p>
        {isLoading ? (
          <p>جارٍ التحميل...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="prayer">
            <div className="prayer-card">
              <h3>الفجر</h3>
              <span>{formatTime(prayerTimes.Fajr)}</span>
            </div>
            <div className="prayer-card">
              <h3>الشروق</h3>
              <span>{formatTime(prayerTimes.Sunrise)}</span>
            </div>
            <div className="prayer-card">
              <h3>الظهر</h3>
              <span>{formatTime(prayerTimes.Dhuhr)}</span>
            </div>
            <div className="prayer-card">
              <h3>العصر</h3>
              <span>{formatTime(prayerTimes.Asr)}</span>
            </div>
            <div className="prayer-card">
              <h3>المغرب</h3>
              <span>{formatTime(prayerTimes.Maghrib)}</span>
            </div>
            <div className="prayer-card">
              <h3>العشاء</h3>
              <span>{formatTime(prayerTimes.Isha)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrayerTimings;
