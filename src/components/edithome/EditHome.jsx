import React, { useContext, useEffect, useRef, useState } from "react";
import "./EditHome.css";
import ShowRecord from "../showrecord/ShowRecord";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";

const EditHome = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [records, setRecords] = useState([]);

  const { user } = useContext(AuthContext);
  const date = useParams().date;

  const subject = useRef();
  const subject_time = useRef();

  useEffect(() => {
    const fetchRecords = async () => {
      const response = await axios.get(
        `/records/record/${date}/?username=${user.username}&password=${user.password}`
      );
      // console.log(response.data);
      setRecords(response.data);
      if (!records) {
        const body = {
          userId: user._id,
          date: date,
        };

        const res = await axios.get(`/records/${date}`);
      }
    };
    fetchRecords();
  }, [user, date]);

  const createSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="edithome">
      <div className="edithomeWrapper">
        <form action="" className="editform">
          <input
            type="text"
            className="editinput"
            required
            placeholder="ex: 数学"
            ref={subject}
          />
          <input
            type="number"
            className="editinput"
            required
            placeholder="ex: 2"
            ref={subject_time}
          />
          <span className="timetext">時間</span>
          <button
            className="addbutton"
            type="submit"
            onSubmit={(e) => createSubmit(e)}
          >
            追加
          </button>
          <button className="createbutton" type="button">
            グラフを作成する
          </button>
        </form>
        {records && records["graph"] ? (
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
