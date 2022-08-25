import React, { useState } from "react";
import "./blogPage.scss";
import { deletePost, updatePost } from "../../shared/actions";
import { toggleModal } from "../../shared/onClickFunctions";

const Blog = ({ firstName, lastName, post, userId, getUserData }) => {
  const [postContent, setPostContent] = useState("");
  const [modal, setModal] = useState(false);
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="userdata">
      <div className="content">
        <h4 className="user-name">
          {firstName} {lastName}
        </h4>
        <p className="posted-content">{post.content}</p>
        <div className="button-container">
          <button
            hidden={userId === post.user ? false : true}
            className="action-button"
            onClick={() => toggleModal(modal, setModal)}
          >
            Update
          </button>
          <button
            hidden={userId === post.user ? false : true}
            className="action-button"
            onClick={() => deletePost(getUserData, post.id)}
          >
            DeletePost
          </button>
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
                      value={postContent}
                      onChange={(e) => {
                        setPostContent(e.target.value);
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
                updatePost(getUserData, setModal, post.id, userId, postContent, setPostContent)
              }
            >
              Update Post
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

export default Blog;
