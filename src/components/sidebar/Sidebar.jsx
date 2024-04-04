import React from "react";
import "./Sidebar.css";
import { StudyDates } from "../../dummyData";
import StudyDate from "../studydate/StudyDate";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebar">
          <div className="sidebarWrapper">
            {StudyDates.map((studydate) => (
              <StudyDate studydate={studydate} key={studydate.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
