import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

const App = () => {
  const [token, setToken] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState([]);

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
        <Route path="/home" element={<Home userData={userData} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
