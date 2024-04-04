import React from "react";
import "./StudyDate.css";

const StudyDate = ({ studydate }) => {
  console.log(studydate);
  return (
    <div className="studydate">
      <div className="studydateWrapper">
        <span className="studydateText">{studydate.date}</span>
      </div>
    </div>
  );
};

export default StudyDate;
