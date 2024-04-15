import React, { useContext } from "react";
import "./Topbar.css";
import { AuthContext } from "../../state/AuthContext";

const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const Topbar = ({ selectedDate, onDateSelect, records, setItemRecords }) => {
  const { user } = useContext(AuthContext);

  const handleclick = (e) => {
    onDateSelect(getTodayDate());
    window.location.reload();
  };

  const handlelogout = (e) => {
    localStorage.removeItem("user");
    localStorage.removeItem("selectedDate");
    setItemRecords(null);
    window.location.reload();
  };

  return (
    <div className="topbarContainer">
      <button className="logout" onClick={(e) => handlelogout(e)}>
        ログアウトする
      </button>
      <span className="topbarCenter">{selectedDate}の記録</span>
      <button className="createtodayrecord" onClick={(e) => handleclick(e)}>
        今日の記録を作成する
      </button>
    </div>
  );
};

export default Topbar;
