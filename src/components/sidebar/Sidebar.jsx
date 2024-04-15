import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import StudyDate from "../studydate/StudyDate";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";

const Sidebar = ({ onDateSelect }) => {
  const [records, setRecords] = useState([]);
  const { user } = useContext(AuthContext);

  // const username = useParams().username;

  useEffect(() => {
    const fetchRecords = async () => {
      const response = await axios.get(
        `/records/all/?username=${user.username}&password=${user.password}`
      );
      setRecords(response.data);
    };
    fetchRecords();
  }, [user]);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebar">
          <div className="sidebarWrapper">
            {records ? (
              records.map((studydate) => (
                <StudyDate
                  studydate={studydate}
                  key={studydate.id}
                  username={user.username} // コメントアウトしていた部分を修正
                  onDateSelect={onDateSelect}
                />
              ))
            ) : (
              <div>記録がありません</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
