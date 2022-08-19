import React, { useState } from "react";
import { toggleModal } from "../../shared/onClickFunctions";
import { updateUserName } from "../../shared/actions";
import axios from "axios";

const Profile = ({ userId, getData, loggedInUserEmail }) => {
  const [modal, setModal] = useState(true);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  return (
    <div>
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <input
              className="create-post-input"
              type="text"
              placeholder="Type your post here"
              onChange={(e) => {
                setNewFirstName(e.target.value);
              }}
            />
            <input
              className="create-post-input"
              type="text"
              placeholder="Type your post here"
              onChange={(e) => {
                setNewLastName(e.target.value);
              }}
            />
            <button
              onClick={() => {
                updateUserName(
                  userId, newFirstName, newLastName, setNewFirstName, setNewLastName, axios, loggedInUserEmail, getData
                );
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
