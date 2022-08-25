import axios from "axios";
import React, { useState } from "react";
import "./profile.scss";

const Profile = ({ user, setIsCreated }) => {
  const [modal, setModal] = useState(true);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  const requestBody = {
    firstName: newFirstName,
    lastName: newLastName,
    userId: user?.nickname,
    email: user?.email,
    photo_url: user?.picture,
    password: "test",
  };

  const createUser = async () => {
    try {
      await axios.post(
        "https://aidenshaw-blogpage.herokuapp.com/users/",
        requestBody
      );
      setIsCreated(true);
      setModal(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {modal && (
        <div className="container">
        <div className="card">
        <h3>Please enter your First and Last Name</h3>
          <label className="input">
            <input
              className="input__field"
              type="text"
              placeholder=" "
              onChange={(e) => {
                setNewFirstName(e.target.value);
              }}
            />
            <span class="input__label">First Name</span>
          </label>
          <br />
          <label className="input">
            <input
              className="input__field"
              type="text"
              placeholder=" "
              onChange={(e) => {
                setNewLastName(e.target.value);
              }}
            />
            <span className="input__label">Last Name</span>
            <br />
            <button className="submit-button" onClick={createUser}>Submit</button>
          </label>
        </div>
      </div>
      )}
    </div>
  );
};

export default Profile;