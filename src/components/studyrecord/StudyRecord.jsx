import React from "react";
import "./StudyRecord.css";
import { StudyDates } from "../../dummyData";
import EditHome from "../edithome/EditHome";
import ShowRecord from "../showrecord/ShowRecord";

const StudyRecord = () => {
  return (
    <div className="studyrecord">
      <div className="studyrecordWrapper">
        <div className="studyrecordTop">
          <span className="studyrecordMessage">
            今日の勉強時間は0時間です。
          </span>
        </div>
        <div className="studyrecordCenter">
          <EditHome />
        </div>
      </div>
    </div>
  );
};

export default StudyRecord;
