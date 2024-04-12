import React from "react";
import "./Topbar.css";
import { useParams } from "react-router-dom";

const Topbar = () => {
  const date = useParams().date;

  return (
    <div className="topbarContainer">
      <span className="topbarCenter">{date}の記録</span>
    </div>
  );
};

export default Topbar;
