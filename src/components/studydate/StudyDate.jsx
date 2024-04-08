import React from "react";
import "./StudyDate.css";
import { Link } from "react-router-dom";

const StudyDate = ({ studydate }) => {
  // console.log(studydate);
  return (
    <div className="studydate">
      <div className="studydateWrapper">
        <Link
          to="/test_user1/2024-04-07"
          style={{ textDecoration: "none", color: "black" }}
        >
          <span className="studydateText">{studydate.date}</span>
        </Link>
      </div>
    </div>
  );
};

export default StudyDate;
