import React, { useContext } from "react";
import "./StudyRecord.css";
import EditHome from "../edithome/EditHome";
import { AuthContext } from "../../state/AuthContext";

const StudyRecord = ({ selectedDate, records, setItemRecords }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="studyrecord">
      <div className="studyrecordWrapper">
        <div className="studyrecordTop">
          <span className="studyrecordMessage">
            {user.username} さん、今日もお疲れ様です
          </span>
        </div>
        <div className="studyrecordCenter">
          <EditHome
            selectedDate={selectedDate}
            records={records}
            setItemRecords={setItemRecords}
          />
        </div>
      </div>
    </div>
  );
};

export default StudyRecord;
