import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup-form">
      <form>
        <label>First Name</label>
        <input type="text" />
        <label>Last Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <label>Confirm Password</label>
        <input type="password" />
        <button>
          <Link to="/">Sign Up</Link>
        </button>
      </form>
    </div>
  );
};

export default SignUp;
