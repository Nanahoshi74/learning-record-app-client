import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";
import ja from "date-fns/locale/ja";
import React from "react";
//日本語化
registerLocale("ja", ja);

const Calendar = () => {
  const initialDate = new Date();
  const [selectedDate, setStartDate] = useState(initialDate);

  //指定できる日付は31日後まで
  const endDate = new Date(initialDate);
  endDate.setDate(endDate.getDate() + 31);

  console.log("startDate = " + selectedDate);
  console.log("endDate = " + endDate);
  const handleChange = (date) => {
    setStartDate(date);
  };

  return (
    <div className={"recordcalendar"}>
      <p className="dateText">日付:</p>
      <div className="calendar">
        <DatePicker
          locale="ja"
          selected={selectedDate}
          dateFormatCalendar="yyyy年 MM月"
          dateFormat="yyyy/MM/dd"
          onChange={handleChange}
          minDate={initialDate}
          maxDate={endDate}
        />
      </div>
    </div>
  );
};

export default Calendar;
