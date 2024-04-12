import React, { useEffect, useState } from "react";
import "./EditHome.css";
import ShowRecord from "../showrecord/ShowRecord";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditHome = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [records, setRecords] = useState([]);
  // const username = useParams().username;
  const date = useParams().date;

  useEffect(() => {
    const fetchRecords = async () => {
      // const response = await axios.get("/records/66151d3396b8abb5de381617");
      // console.log(response.data);
      // setRecords(response.data);
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
