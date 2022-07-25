import React from "react";
import Col from "./Col";


const AllCols = () => {
  const statuses = [
    { status: "To do" },
    { status: "in Progress" },
    { status: "Completed" },
  ];
  const data = [
    {
      status: "To do",
      title: "Md owais",
      description: "Aligarh Muslim University",
    },
    {
      status: "To do",
      title: "Md owais",
      description: "Aligarh Muslim University",
    },
    {
      status: "in Progress",
      title: "Md owais",
      description: "Aligarh Muslim University",
    },
    {
      status: "To do",
      title: "Md owais",
      description: "Aligarh Muslim University",
    },
    {
      status: "Complete",
      title: "Md owais",
      description: "Aligarh Muslim University",
    },
  ];
  return (
    <div>
      <div className="allColumn">
        <Col prop={statuses} />
      </div>
    </div>
  );
};

export default AllCols;
