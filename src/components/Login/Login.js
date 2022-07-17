import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import trees from "./trees.jpg";

const Login = ({
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
    setToken(data);
    console.log(data);
  };

  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
        <div className="w-full h-[550px] hidden md:block">
          <img className="w-full h-full" src={trees} alt="/" />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form>
            <h2 className="text-4xl font-bold text-center mb-8">Login Page</h2>
            <div>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className="border p-2 mr-2"
                type="text"
                placeholder="Username"
              />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="border p-2"
                type="password"
                placeholder="Password"
              />
            </div>
            <button
              onClick={loginHandler}
              className="w-full py-2 my-4 bg-green-600 hover:bg-green-500"
            >
              <Link to="/home">Sign In</Link>
            </button>
            <p className="text-center">Forgot Username or Password?</p>
          </form>
          <p className="text-center">
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
