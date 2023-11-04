import React from "react";
import Button, { ButtonOutLine } from "../../components/Button/Button";

import "./TimeTable.css";
import SeactionHead from "../SeactionHead/SeactionHead";

const TimeTable = () => {
  return (
    <div className="time-table">
      <SeactionHead title="الجدول الزمني" subtitle="جدول الحصص الأسبوعية" />
      <div className="table-buttons">
        <Button name="مواعيد التحفيظ" />
        <ButtonOutLine name="المسابقات" />
        <ButtonOutLine name="الفعاليات" />
      </div>

      <div className="t-table">
        <table>
          <thead>
            <tr>
              <th style={{ borderRadius: "0 20px 0 0" }}></th>
              <th>السبت</th>
              <th>الحد</th>
              <th>الاثنين</th>
              <th>الثلاثاء</th>
              <th>الأربعاء</th>
              <th style={{ borderRadius: "20px 0 0 0" }}>الخميس</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10:00 ص</td>
              <td>
                <p>سورة البقرة</p>
                <span>10:00 ص - 11:00 ص</span>
                <span>تحفيظ</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>12:00 ص</td>
              <td></td>
              <td>
                <p>جزء عم</p>
                <span>12:00 ص - 1:00 م</span>
                <span>تسميع</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2:00 م</td>
              <td></td>
              <td></td>
              <td>
                <p>سورة المائدة</p>
                <span>2:00 م - 3:00 م</span>
                <span>تحفيظ</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4:00 م</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <p>سورة المائدة</p>
                <span>4:00 م - 5:00 م</span>
                <span>تكرار</span>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>6:00 م</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <p>الجزء الثالث</p>
                <span>6:00 م - 7:00 م</span>
                <span>تحفيظ</span>
              </td>
              <td></td>
            </tr>
            <tr>
              <td style={{ borderRadius: "0 0 20px 0" }}>8:00 م</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td style={{ borderRadius: "0 0 0 20px" }}>
                <p>الجزء الثالث</p>
                <span>7:00 م - 8:00 م</span>
                <span>تكرار</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeTable;
