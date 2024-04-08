import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import StudyDate from "../studydate/StudyDate";
import axios from "axios";

const Sidebar = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      const response = await axios.get("/records/all/test_user1");
      console.log(response.data);
      setRecords(response.data);
    };
    fetchRecords();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebar">
          <div className="sidebarWrapper">
            {records.map((studydate) => (
              <StudyDate studydate={studydate} key={studydate.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
