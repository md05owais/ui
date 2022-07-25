import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./component/signup/Signup";
import Login from "./component/login/Login";
// import ResetPassword from "./component/forgot/ResetPassword";
// import Send_otp from "./component/forgot/Send.Otp";
// import Validate_otp from "./component/forgot/Validate_otp";
// import RaiseDoubt from "./component/studentportal/RaiseDoubt";
import Index from "./component/dashBord/Index";
import GetCookie from "./component/hooks/GetCookie";
// import ProtectedRoute from "./component/ProtectedRoute";

function App() {
 
  const [auth, setAuth] = useState(false);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/youshd/login" element={<Login />}></Route>

          <Route exact path="/youshd" element={<Login />}></Route>

          <Route path="/youshd/register" element={<Signup />}></Route>
          <Route path="/youshd/profile" element={<Index />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
