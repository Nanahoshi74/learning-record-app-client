import React from "react";
import "./ShowRecord.css";

const ShowRecord = ({ item, time }) => {
  return (
    <div className="showrecord">
      <div className="showrecordWrapper">
        <div className="subject">{item}</div>
        <div className="studytime">{time}</div>
        <button className="editbutton">編集</button>
      </div>
    </div>
  );
};

export default ShowRecord;
