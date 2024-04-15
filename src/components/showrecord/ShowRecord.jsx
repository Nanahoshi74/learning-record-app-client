import React, { useContext, useState } from "react";
import "./ShowRecord.css";
import { AuthContext } from "../../state/AuthContext";
import axios from "axios";

const ShowRecord = ({ item, time, selectedDate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTime, setEditableTime] = useState(time);
  const { user } = useContext(AuthContext);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleTimeChange = (e) => {
    setEditableTime(e.target.value);
  };

  const handleSubmit = async () => {
    await axios.put(
      `/records/add/${selectedDate}/?username=${user.username}&password=${user.password}`,
      {
        subject: item,
        subject_time: editedTime,
      }
    );
    setIsEditing(false);
    window.location.reload();
  };
  return (
    <div className="showrecord">
      <div className="showrecordWrapper">
        <div className="subject">{item}</div>
        {isEditing ? (
          <input
            type="number"
            className="editinginput"
            value={editedTime}
            min={1}
            max={24}
            required
            onChange={(e) => handleTimeChange(e)}
          />
        ) : (
          <div className="studytime">{editedTime}</div>
        )}
        {isEditing ? (
          <button className="editbutton" onClick={handleSubmit}>
            保存
          </button>
        ) : (
          <>
            <span className="hourtext">時間</span>
            <button className="editbutton" onClick={handleEditClick}>
              編集
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ShowRecord;
