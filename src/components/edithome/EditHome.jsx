import React, { useEffect, useState } from "react";
import "./EditHome.css";
import ShowRecord from "../showrecord/ShowRecord";
import axios from "axios";

const EditHome = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      const response = await axios.get("/records/6612704e79a27d113b2c1165");
      // console.log(response.data);
      setRecords(response.data);
    };
    fetchRecords();
  }, []);

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
        {records["graph"] ? (
          <img src={PUBLIC_FOLDER + "/graph/1.jpeg"} alt="" />
        ) : (
          <div>表示する画像がありません</div>
        )}
        {/* {Object.keys(records["studyTime"]).map((item) => (
          <ShowRecord item={item} time={records["studyTime"][item]} />
        ))} */}
        {records && records["studyTime"] ? (
          Object.keys(records["studyTime"]).map((item) => (
            <ShowRecord
              key={item}
              item={item}
              time={records["studyTime"][item]}
              id={records._id}
            />
          ))
        ) : (
          <div>表示するデータがありません</div>
        )}
      </div>
    </div>
  );
};

export default EditHome;
