import React, { useState } from "react";
import "./navBar.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { createPost } from "../../shared/actions";
import { toggleModal } from "../../shared/onClickFunctions";

const NavBar = ({ userId, allUsers, getUserData }) => {
  const { logout } = useAuth0();
  const [createContent, setCreateContent] = useState("");
  const [modal, setModal] = useState(false);

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const navBarData = allUsers.filter((item) => {
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
            <section className="input-content">
              <div className="input-content-wrap">
                <dl className="inputbox">
                  <dd className="inputbox-content">
                    <input
                      id="input0"
                      type="text"
                      value={createContent}
                      onChange={(e) => {
                        setCreateContent(e.target.value);
                      }}
                      required
                    />
                    <label for="input0">Type your text here</label>
                    <span className="underline"></span>
                  </dd>
                </dl>
              </div>
            </section>
            <button className="modal-action-button"
              onClick={() =>
                createPost(
                  getUserData,
                  setModal,
                  createContent,
                  userId,
                  setCreateContent
                )
              }
            >
              Create Post
            </button>
            <button
              className="modal-close-button"
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