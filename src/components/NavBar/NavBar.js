import React from "react";
import "./navBar.scss";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { logout } = useAuth0();
  return (
    <div className="sidenav">
      <a href="http://localhost:3000/">Home</a>
      <a href="#">Profile</a>
      <a href="#">Create Post</a>
      <a href="#" onClick={logout}>
        Sign Out
      </a>
    </div>
  );
};

export default NavBar;
