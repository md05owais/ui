import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Validate_otp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    otp: 0,
    Email: "md05owais@gmail.com",
  });
  const postOtp = async (e) => {
    e.preventDefault();
    const { Email, otp } = data;
    const res = await fetch("/validateotp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email,
        otp,
      }),
    });
    const result = await res.json();
    console.log(result);
    if (result.status !== 201) {
      window.alert(result.message);
      // return;
    } else {
      window.alert(result.message);
      console.log("owais");
      navigate("/reset");
    }
  };
  return (
    <div className="form">
      <form method="POST">
        <div>
          <label>
            <span>*</span>
          </label>
          <i className="envelope icon"></i>
          <input
            type="text"
            placeholder="otp"
            required
            onChange={(e) => setData({ ...data, otp: e.target.value })}
          ></input>
          <br />
          <p>Enter otp</p>
          <button onClick={(e) => postOtp(e)}>Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Validate_otp;
