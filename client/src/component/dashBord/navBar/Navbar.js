import React from "react";
import Search from "../../Asset/Search.svg";
import GropPeople from "../../Asset/GroupPeople.svg";
import ProfilePic from "../../Asset/ProfilePic.svg";
import Filter from "../../Asset/Filter.svg";
import "./navBar.css";
import AllCols from "../body/AllCols";
const Navbar = () => {
  return (
    <div>
      <div className="NavBar">
        <div className="searchUserDetail">
          <div className="imageContainer Search">
            <img src={Search}></img>
            <input type="text" placeholder="Search"></input>
          </div>
          <img src={GropPeople}></img>
          <div className="imageContainer Name">
            <div className="userName">Mohammad Owasi</div>
            <img src={ProfilePic}></img>
          </div>
        </div>
        <div className="ProjectDetails">
          <div>Projects</div>
          <div className="imageContainer">
            <img src={Filter}></img>
            filter
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
