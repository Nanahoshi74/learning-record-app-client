import React from "react";
import { StartPageSidebarData } from "./StartPageSidebarData";
import "./StartPageSidebar.css";
import { Link, useNavigate } from "react-router-dom";

const StartPageSidebar = () => {
  return (
    <div className="startpagesidebar">
      <ul className="startpagesidebarlist">
        {StartPageSidebarData.map((value, key) => {
          console.log(value.link);
          return (
            <li
              key={key}
              id={window.location.pathname === value.link ? "active" : ""}
              className="row"
            >
              <Link
                to={`${value.link}`}
                style={{
                  textDecoration: "none",
                  color: "white",
                  width: "100%",
                  height: "70px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div id="icon">{value.icon}</div>
                <div id="title">{value.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StartPageSidebar;
