import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    Email: "",
    Password: "",
    confirmPassword: "",
  });
  const handleResetButton = async (e) => {
    e.preventDefault();
    const { Email, Password, confirmPassword } = data;
    if (Password !== confirmPassword) {
      window.alert("Password and confirmPassword should be same");
      return;
    }
    const res = await fetch("/resetpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: Email,
        Password: Password,
      }),
    });

    const result = await res.json();

    if (result.status !== 201) {
      window.alert(result.message);
      return;
    } else {
      window.alert(result.message);
      navigate("/login");
    }
  };
  return (
    <div>
      <h3>Welecome to Redressal System</h3>
      <div className="form">
        <form method="POST">
          <div>
            <label>
              <span>*</span>
            </label>
            <i className="envelope icon"></i>
            <input
              type="text"
              placeholder="Email"
              required
              onChange={(e) => setData({ ...data, Email: e.target.value })}
            ></input>
          </div>
          <div>
            <label>
              <span>*</span>
            </label>
            <i className="lock icon"></i>
            <input
              type="text"
              placeholder="New Password"
              required
              onChange={(e) => setData({ ...data, Password: e.target.value })}
            ></input>
          </div>
          <div>
            <label>
              <span>*</span>
            </label>
            <i className="lock icon"></i>
            <input
              type="text"
              placeholder=" Confirm Password"
              required
              onChange={(e) =>
                setData({ ...data, confirmPassword: e.target.value })
              }
            ></input>
          </div>
          <button onClick={(e) => handleResetButton(e)}>Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
