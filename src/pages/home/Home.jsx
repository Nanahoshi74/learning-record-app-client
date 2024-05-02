import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
import Topbar from "../../components/topbar/Topbar";
import StudyRecord from "../../components/studyrecord/StudyRecord";

const Home = ({ selectedDate }) => {
  const [records, setRecords] = useState({});

  const setItemRecords = (item) => {
    setRecords(item);
  };

  useEffect(() => {
    localStorage.setItem("selectedDate", selectedDate);
  }, [selectedDate]);
  return (
    <>
      <Topbar
        selectedDate={selectedDate}
        records={records}
        setItemRecords={setItemRecords}
      />
      <div className="homeContainer">
        {/* <div className="sidebarContainer">
          <Sidebar onDateSelect={handleDateSelect} />
        </div> */}
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
