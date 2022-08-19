import React, { useState } from "react";
import axios from "axios";
import "./navBar.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { createPost } from "../../shared/actions";
import { toggleModal } from "../../shared/onClickFunctions";

const NavBar = ({ userId, getData, userData }) => {
  const { logout } = useAuth0();
  const [createContent, setCreateContent] = useState("");
  const [modal, setModal] = useState(false);

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const navBarData = userData.filter((item) => {
    if (item.id === userId) {
      return (
        <div className="userdata" key={item.id}>
          {item.firstName} {item.lastName}
        </div>
      );
    } else {
      return null;
    }
  });

  return (
    <div className="sidenav">
      <a href="http://localhost:3000/">Home</a>
      {/* <a href="">Profile</a> */}
      <a href="#/" onClick={() => toggleModal(modal, setModal)}>
        Create Post
      </a>
      <a href="#/" onClick={logout}>
        Sign Out
      </a>
      <div className="navBarData">
        {/* <div >
          <img className="navBarDataImage" src={navBarData[0]?.photo_url} alt="profile" />
        </div> */}
        <div>
          {navBarData[0]?.firstName} {navBarData[0]?.lastName}
        </div>
      </div>
      {modal && (
        <div className="modal">
          <div
            onClick={() => toggleModal(modal, setModal)}
            className="overlay"
          ></div>
          <div className="modal-content">
            <input
              className="create-post-input"
              type="text"
              placeholder="Type your post here"
              value={createContent}
              onChange={(e) => {
                setCreateContent(e.target.value);
              }}
            />
            <button
              onClick={() =>
                createPost(
                  createContent,
                  userId,
                  axios,
                  getData,
                  setCreateContent
                )
              }
            >
              Create Post
            </button>
            <button
              className="close-modal"
              onClick={() => toggleModal(modal, setModal)}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
