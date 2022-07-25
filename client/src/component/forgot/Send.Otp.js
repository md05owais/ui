import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Send_otp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    Email: "",
    otp: 0,
  });
  //   const [otpsend, isOtpSend] = useState(false);
  console.log(data);
  //   console.log(otp);

  const postData = async (e) => {
    e.preventDefault();
    const { Email } = data;

    const res = await fetch("/sendotp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email,
      }),
    });
    const result = await res.json();

    if (result.status !== 201) {
      window.alert(result.message);
      return;
    } else {
      window.alert(result.message);
      navigate("/validate");
      return;
    }
  };
  //   console.log(data, otp);
  //   const postOtp = async (e) => {
  //     e.preventDefault();

  //     const { Email, otp } = data;
  //     // const { otp } = otp;
  //     console.log(Email, otp);

  //     const res = await fetch("/validateotp", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         Email,
  //         otp,
  //       }),
  //     });
  //     const result = await res.json();

  //     if (result.status !== 201) {
  //       window.alert(result.message);
  //       return;
  //     } else {
  //       window.alert(result.message);
  //       navigate("/ResetPassword");
  //     }
  //   };
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
            placeholder="Email"
            required
            onChange={(e) => setData({ ...data, Email: e.target.value })}
          ></input>
          <br />
          <p>Enter Your Email</p>
          <button onClick={(e) => postData(e)}>send Otp</button>
        </div>
      </form>
    </div>
  );
};

export default Send_otp;
