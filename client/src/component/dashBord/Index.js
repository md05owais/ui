import React from "react";
import AllCols from "./body/AllCols";
import Body from "./body/Body";

import Navbar from "./navBar/Navbar";
import SideBar from "./sideBar/SideBar";
import VirticalLine from "./virticalLine/VirticalLine";

const Index = () => {
  return (
    <div>
      <SideBar />
      <VirticalLine />
      <Navbar />
      <Body />
    </div>
  );
};

export default Index;
