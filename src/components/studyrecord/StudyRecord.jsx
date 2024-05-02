import React, { useContext, useEffect, useState } from "react";
import "./StudyRecord.css";
import EditHome from "../edithome/EditHome";
import { AuthContext } from "../../state/AuthContext";
import { useParams } from "react-router-dom";

const StudyRecord = ({ records, setItemRecords }) => {
  const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) return false;
    let today = new Date();
    today.toLocaleDateString("ja-JP", {
      timeZone: "Asia/Tokyo",
    });

    let date = new Date(dateString);
    date.toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
    });

    console.log(today.getDate());
    console.log(date.getDate());

    if (date.getDate() > today.getDate()) {
      return false;
    }
    return !isNaN(date.getTime());
  };
  const selectedDate = useParams().date;
  useEffect(() => {
    if (!isValidDate(selectedDate)) {
      setErr(true);
      return;
    }
  }, [selectedDate]);
  const { user } = useContext(AuthContext);

  const [err, setErr] = useState(false);

  return (
    <div className="studyrecord">
      <div className="studyrecordWrapper">
        <div className="studyrecordTop">
          {err ? (
            <div className="invaliddate">
              日付が有効ではありません。今日より先の記録は記入できません
            </div>
          ) : (
            <span className="studyrecordMessage">
              {user.username} さん、今日もお疲れ様です
            </span>
          )}
        </div>
        <div className="studyrecordCenter">
          {!err && (
            <EditHome
              selectedDate={selectedDate}
              records={records}
              setItemRecords={setItemRecords}
              err={err}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyRecord;
