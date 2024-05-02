import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";
import ja from "date-fns/locale/ja";
import React from "react";
import { useNavigate } from "react-router-dom";
//日本語化
registerLocale("ja", ja);

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const initialDate = new Date();
  const startDate = new Date(initialDate);
  startDate.setDate(startDate.getDate() - 3650);
  const [calendardate, setCalendarDate] = useState(initialDate);
  const endDate = new Date(initialDate);
  endDate.setDate(endDate.getDate());

  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
  };

  const handleChange = (date) => {
    setCalendarDate(date);
  };

  const handleconfirmbutton = (e) => {
    if (calendardate === undefined) return;
    navigate(`/record/${formatDate(calendardate)}`);
  };

  return (
    <div className={"recordcalendar"}>
      <div className="dateGroup">
        <p className="dateText">日付:</p>
        <div className="calendar">
          <DatePicker
            locale="ja"
            selected={calendardate}
            dateFormatCalendar="yyyy年 MM月"
            dateFormat="yyyy/MM/dd"
            onChange={handleChange}
            minDate={startDate}
            maxDate={endDate}
          />
        </div>
        <div className="confirm">
          <button
            className="confirm-button"
            onClick={(e) => {
              handleconfirmbutton(e);
            }}
          >
            記録の作成・確認
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
