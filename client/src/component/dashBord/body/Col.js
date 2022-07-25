import React from "react";
import plus from "../../Asset/plus.svg";
import "./style/body.css";
const Col = (props) => {
  return (
    <>
      {props.prop.map((elem) => {
        return (
          <div className="column">
            <div className="counter-Task">
              <h3>{elem.status}</h3>
              <div className="counter">0</div>
            </div>
            <button className="button">
              <img src={plus}></img>
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Col;
