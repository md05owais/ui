import React from "react";
import "./checkbox.css";
import SetCookie from "../hooks/setCookie";

const CheckBox = (props) => {
  console.log(props);
  const setcookie = () => {
    if (props.passEmail?.Email && props.passEmail?.Password) {
      const { Email, Password, ...other } = props.passEmail;
      SetCookie("Email", Email);
      SetCookie("password", Password);
    } else {
      console.log("ow");
    }
    // const { Email, Password } = props.passEmail;
  };
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        name="rememberme"
        id="rememberme"
        onClick={setcookie()}
      />{" "}
      <span>Remember Me</span>
    </div>
  );
};

export default CheckBox;
