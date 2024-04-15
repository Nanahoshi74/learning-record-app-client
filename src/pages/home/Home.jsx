import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
import Topbar from "../../components/topbar/Topbar";
import StudyRecord from "../../components/studyrecord/StudyRecord";

const Home = () => {
  const [records, setRecords] = useState({});

  const setItemRecords = (item) => {
    setRecords(item);
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
  const [selectedDate, setSelectedDate] = useState(
    localStorage.getItem("selectedDate") || getTodayDate()
  );

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    localStorage.setItem("selectedDate", selectedDate);
  }, [selectedDate]);
  return (
    <>
      <Topbar
        selectedDate={selectedDate}
        onDateSelect={handleDateSelect}
        records={records}
        setItemRecords={setItemRecords}
      />
      <div className="homeContainer">
        <div className="sidebarContainer">
          <Sidebar onDateSelect={handleDateSelect} />
        </div>
        <div className="studyRecordContainer">
          <StudyRecord
            selectedDate={selectedDate}
            records={records}
            setItemRecords={setItemRecords}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
