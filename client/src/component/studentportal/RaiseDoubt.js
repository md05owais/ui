import React, { useState } from "react";

const RaiseDoubt = () => {
  const [data, setData] = useState({
    Title: "",
    Description: "",
  });
  const postData = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div>
        <div>
          <a href="/Home">Home</a>| <a href="/RaiseDoubt">Raise Doubt</a>
        </div>
        <div>
          <button>Logout</button>
        </div>
      </div>
      <div className="form">
        <form method="POST">
          <div>
            <label style={{ textAlign: "left" }}>title</label>
            <br />
            <input
              type="text"
              onChange={(e) => setData({ ...data, Email: e.target.value })}
            ></input>
          </div>
          <div>
            <label>Description</label>
            <input
              type="textarea"
              onChange={(e) => setData({ ...data, Password: e.target.value })}
            ></input>
          </div>
          <button onClick={(e) => postData(e)}>Ask Boubt</button>
        </form>
      </div>
    </div>
  );
};

export default RaiseDoubt;
