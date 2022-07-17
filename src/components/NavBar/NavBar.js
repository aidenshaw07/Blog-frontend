import React from "react";
import "./navBar.scss";

const NavBar = () => {
  return (
    <div className="sidenav">
      <a href="http://localhost:3000/home">Home</a>
      <a href="http://localhost:3000/profile">Profile</a>
      <a href="#">Create Post</a>
      <a href="#">Sign Out</a>
    </div>
  );
};

export default NavBar;
