import { useContext, useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";
import ja from "date-fns/locale/ja";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../state/AuthContext";
//日本語化
registerLocale("ja", ja);

const Calendar = () => {
  const initialDate = new Date();
  const startDate = new Date(initialDate);
  startDate.setDate(startDate.getDate() - 3650);
  const [calendardate, setCalendarDate] = useState(initialDate);
  const endDate = new Date(initialDate);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const { user } = useContext(AuthContext);
  const [studydates, setStudyDates] = useState([]);
  const [dates, setDates] = useState([]);
  endDate.setDate(endDate.getDate());

  const navigate = useNavigate();
  useEffect(() => {
    const fetchRecordsDate = async () => {
      const response = await axios.get(
        `${backendUrl}/records/all/date/?username=${user.username}&password=${user.password}`
      );
      if (response.data) setStudyDates(response.data);
    };
    fetchRecordsDate();
    const pre_dates = [];
    studydates.map((date) => {
      pre_dates.push(new Date(formatDate(date)));
    });
    setDates(pre_dates);
  }, [dates, studydates]);

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
        {/* <div className="date">
          <p className="dateText">日付:</p>
        </div> */}
        <div className="calendar">
          <DatePicker
            selected={calendardate}
            onChange={handleChange}
            size="lg"
            // startDate={startDate}
            // endDate={endDate}
            inline
            dateFormat="yyyy/MM/dd" // デフォだと「dd/MM/YYYY」なので
            dateFormatCalendar="yyyy年 MM月"
            locale="ja" // 上で設定した日本語化をここで設定
            minDate={startDate}
            maxDate={endDate}
            // monthsShown={1}
            popperPlacement="down"
            highlightDates={dates}
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
