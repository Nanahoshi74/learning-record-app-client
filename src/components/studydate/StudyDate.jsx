import React from "react";
import "./StudyDate.css";
import { Link } from "react-router-dom";

const StudyDate = ({ studydate, username }) => {
  // console.log(studydate);

  const extractTime = (dateTimeString) => {
    const datePart = dateTimeString.split("T")[0];
    return datePart;
  };

  return (
    <div className="studydate">
      <div className="studydateWrapper">
        <Link
          to={`/${extractTime(studydate.date)}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <span className="studydateText">{studydate.date}</span>
        </Link>
      </div>
    </div>
  );
};

export default StudyDate;
