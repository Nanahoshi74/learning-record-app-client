import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import StudyDate from "../studydate/StudyDate";
import axios from "axios";
import { AuthContext } from "../../state/AuthContext";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Sidebar = ({ onDateSelect }) => {
  const [records, setRecords] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchRecords = async () => {
      const response = await axios.get(
        `${backendUrl}/records/all/?username=${user.username}&password=${user.password}`
      );
      setRecords(response.data);
    };
    fetchRecords();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebar">
          <div className="sidebarWrapper">
            {records ? (
              records.map((studydate) => (
                <StudyDate
                  studydate={studydate}
                  key={studydate._id}
                  username={user.username}
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
