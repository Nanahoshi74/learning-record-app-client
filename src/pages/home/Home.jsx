import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
import Topbar from "../../components/topbar/Topbar";
import StudyRecord from "../../components/studyrecord/StudyRecord";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <StudyRecord />
      </div>
    </>
  );
};

export default Home;
