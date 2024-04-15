import React from "react";
import "./StudyDate.css";
import { Link } from "react-router-dom";

const StudyDate = ({ studydate, username, onDateSelect }) => {
  const handleClick = () => {
    onDateSelect(studydate.date);
  };

  return (
    <div className="studydate" onClick={handleClick}>
      <div className="studydateWrapper">
        <Link style={{ textDecoration: "none", color: "black" }}>
          <span className="studydateText">{studydate.date}</span>
        </Link>
      </div>
    </div>
  );
};

export default StudyDate;
