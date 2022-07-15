import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignIn = ({
  setToken,
  username,
  setUsername,
  password,
  setPassword,
  setUserData,
}) => {
  const loginHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8000/api/token/", {
      username: username,
      password: password,
    });
    const data = await response.data;
    localStorage.setItem("Name", username);
    localStorage.setItem("Token", data.access);
    const userResponse = await axios.get("http://localhost:8000/users", {
      headers: {
        Authorization: `Bearer ${data.access}`,
      },
    });
    const userData = await userResponse.data;
    setToken(data);
    console.log(data);
    setUserData(userData);
    console.log(userData);
  };

  return (
    <div className="login-parent">
      <form className="login-form">
        <p className="welcome">Welcome Back</p>
        <input
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          type="text"
        />
        <input
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type="password"
        />
        <button type="submit" onClick={loginHandler}>
          <Link to="/home">
          Log Butt
          </Link>
        </button>
      </form>

      <div className="signup-redirect">
        <p>Don't have an account yet? </p>
        <Link to="/signup">
          <div>
            <strong>Signup</strong>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
