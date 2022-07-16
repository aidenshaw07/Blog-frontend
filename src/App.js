import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  const [token, setToken] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:8000/users");
    const data = await response.data;
    console.log(data);
    setUserData(data);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              setToken={setToken}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              setUserData={setUserData}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Home
              userData={userData}
              setUserData={setUserData}
              getData={getData}
            />
          }
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
