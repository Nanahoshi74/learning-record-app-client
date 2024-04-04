import React from "react";
import "./StudyRecord.css";
import { StudyDates } from "../../dummyData";

const StudyRecord = () => {
  console.log(StudyDates);
  return (
    <div className="studyrecord">
      <div className="studyrecordWrapper">
        <div className="studyrecordTop">
          <span className="studyrecordMessage">
            今日の勉強時間は0時間です。
          </span>
        </div>
        <div className="studyrecordCenter">
          {StudyDates[0]["photo"] ? (
            <img src="assets/graph/1.jpeg" alt="" className="graphImg" />
          ) : (
            <div className="notexistImgMsg">画像がありません</div>
          )}
        </div>
        <div className="studyrecordbottom">
          
        </div>
      </div>
    </div>
  );
};

export default StudyRecord;
