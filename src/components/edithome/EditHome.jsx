import React from "react";
import "./EditHome.css";
import { StudyDates } from "../../dummyData";
import ShowRecord from "../showrecord/ShowRecord";

const showrecord = (recordObj) => {
  return Object.keys(recordObj).map((item) => (
    <>
      <span className="subjectname">{item}</span>
      <span className="studytime">{recordObj[item]}</span>
    </>
  ));
};

const EditHome = () => {
  return (
    <div className="edithome">
      <div className="edithomeWrapper">
        <form action="" className="editform">
          <input
            type="text"
            className="editinput"
            required
            placeholder="ex: 数学"
          />
          <input
            type="number"
            className="editinput"
            required
            placeholder="ex: 2時間"
          />
          <button className="addbutton">追加</button>
          <button className="addbutton">グラフを作成する</button>
        </form>
        {StudyDates[0]["photo"] ? (
          <img src="/assets/graph/1.jpeg" alt="" />
        ) : (
          <div>表示する画像がありません</div>
        )}
        {Object.keys(StudyDates[0]["record"]).map((item) => (
          <ShowRecord item={item} time={StudyDates[0]["record"][item]} />
        ))}
      </div>
    </div>
  );
};

export default EditHome;
