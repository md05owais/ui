import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Vector from "../Asset/Vector.svg";
import Group from "../Asset/Group.svg";
import "./signup.css";
import CheckBox from "../checkBox/CheckBox";
import SetCookie from "../hooks/setCookie";
import GetCookie from "../hooks/GetCookie";
import RemoveCookie from "../hooks/RemoveCookie";
const Signup = () => {
  const [register, isRegister] = useState(false);
  const [color, setColor] = useState({
    login: false,
    signup: true,
  });

  const hansdleSubmit = (e) => {
    isRegister(true);
  };

  const navigate = useNavigate();
  const [data, setData] = useState({
    modified: false,
    FullName: "",
    Email: "",
    Password: "",
  });
  window.onbeforeunload = () => (data.modified ? "please save" : null);
  const PostData = async (e) => {
    e.preventDefault();

    const { FullName, Email, Password } = data;
    console.log(FullName);
    const res = await fetch("/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        FullName,
        Email,
        Password,
      }),
    });

    const result = await res.json();

    console.log(result, result.status);
    if (result.status === 400) {
      window.alert(result.message);
      return;
    }
    if (result.status === 401) {
      window.alert(result.message);
      console.log(result.message);
      return;
    }
    if (result.status === 404) {
      window.alert("please try with proper input");
      return;
    } else {
      console.log(result);
      RemoveCookie("usrin");
      SetCookie("usrin", result.Email, result.Password);
      window.alert("Registration Successfull");
      navigate("/youshd/profile");
    }
    console.log(result);
  };
  console.log(data);
  return (
    <div>
      <div className="LeftContainer">
        <img src={Group} alt="Md owais"></img>
      </div>
      <div className="login_signup">
        <div className="link_signup_login">
          <a href="/youshd">
            <h2
              onClick={() => {
                setColor({ login: true, signup: false });
              }}
              className={color.login ? "black" : "other"}
            >
              Login
            </h2>
          </a>
          <a href="/youshd/register">
            <h2
              onClick={() => {
                setColor({ login: false, signup: true });
              }}
              className={color.signup ? "black" : "other"}
            >
              Sign up
            </h2>
          </a>
        </div>

        <hr />
        <div style={{ alighItems: "center" }} className="form">
          <form method="POST" onSubmit={(e) => hansdleSubmit(e)}>
            <div>
              <label>
                <span>*</span>
              </label>

              <input
                type="text"
                placeholder="Full Name"
                required
                onChange={(e) => setData({ ...data, FullName: e.target.value })}
              ></input>
            </div>
            <div>
              <label>
                <span>*</span>
              </label>

              <input
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setData({ ...data, Email: e.target.value })}
              ></input>
            </div>

            <div>
              <label>
                <span>*</span>
              </label>

              <input
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setData({ ...data, Password: e.target.value })}
              ></input>
            </div>
            <img src={Vector} className="vision"></img>

            <div>
              <button onClick={(e) => PostData(e)}>Sign up</button>
            </div>
          </form>
          <CheckBox passEmail={data} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
