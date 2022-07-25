import React, { useState } from "react";
import Home from "../studentportal/Home";
import "./login.css";
import Vector from "../Asset/Vector.svg";
import Group from "../Asset/Group.svg";
import CheckBox from "../checkBox/CheckBox";
import Message from "../Asset/Message.svg";
import { useNavigate } from "react-router-dom";
// import ErrorBoundries from "../../ErrorBoundries";
// import ForgotPassword from "../forgot/ForgotPassword";
const Login = () => {
  const navigate = useNavigate();
  const [color, setColor] = useState({
    login: true,
    signup: false,
  });
  const [isLogin, isLoginSet] = useState(false);
  const [data, setData] = useState({
    Email: "",
    Password: "",
  });
  if (isLogin === true) {
    navigate("/youshd/profile");
    return;
  }
  const postData = async (e) => {
    e.preventDefault();
    const { Email, Password } = data;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email,
        Password,
      }),
    });
    const result = await res.json();
    console.log(result);
    if (result.status === 401) {
      window.alert(result.message);
      return;
    }
    if (result.status === 400) {
      window.alert(result.message);
    } else {
      window.alert(result.message);
      isLoginSet(true);
    }
  };

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
        <div>
          <div className="Continue">
            <h1>To Continue</h1>
            <p>We need your Email & password</p>
          </div>
          <div className="form">
            <form method="POST">
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
                  type="text"
                  placeholder="Password"
                  required
                  onChange={(e) =>
                    setData({ ...data, Password: e.target.value })
                  }
                ></input>
              </div>
              <img src={Vector} className="vision1"></img>
              <div className="hidden">
                <img src={Message}></img>
                <div>please entr valid email</div>
              </div>
              <button onClick={(e) => postData(e)}>Login</button>
              <div className="items"></div>
            </form>
            <CheckBox passEmail={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
