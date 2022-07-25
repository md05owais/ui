import React from "react";
import "./sideBar.css";
import overview from "../../Asset/overview.svg";
import Stats from "../../Asset/Stats.svg";
import Projects from "../../Asset/Projects.svg";
import Chat from "../../Asset/Chat.svg";
import Calender from "../../Asset/Calender.svg";
import Setting from "../../Asset/Setting.svg";
import LogOut from "../../Asset/LogOut.svg";

const SideBar = () => {
  return (
    <div>
      <div className="sideBarHeading">.taskez</div>
      <div className="sideBar">
        <div className="sideBarBody">
          <div className="imageContainer">
            <img src={overview}></img>
            <div>overview</div>
          </div>
          <div className="imageContainer">
            <img src={Stats}></img>
            <div> Stats</div>
          </div>
          <div className="imageContainer">
            <img src={Projects}></img>
            <div>Projects</div>
          </div>
          <div className="imageContainer">
            <img src={Chat}></img>
            <div>Chats</div>
          </div>
          <div className="imageContainer">
            <img src={Calender}></img>
            <div>Calender</div>
          </div>
        </div>
        <footer className="sideBarFooter">
          <div className="imageContainer">
            <img src={Setting}></img>
            <div>Setting</div>
          </div>
          <div className="imageContainer">
            <img src={LogOut}></img>
            <div>Log Out</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SideBar;
