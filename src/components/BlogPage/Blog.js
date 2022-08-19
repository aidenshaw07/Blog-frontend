import React, { useState } from "react";
import "./blogPage.scss";
import { deletePost, updatePost } from "../../shared/actions";
import { toggleModal } from "../../shared/onClickFunctions";

const Blog = ({ firstName, lastName, post, axios, getData, userId }) => {
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
            onClick={() => deletePost(post.id, axios, getData)}
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
            <input
              className="create-post-input"
              type="text"
              placeholder="Type your post here"
              value={postContent}
              onChange={(e) => {
                setPostContent(e.target.value);
              }}
            />
            <button
              onClick={() =>
                updatePost(
                  post.id,
                  userId,
                  axios,
                  getData,
                  postContent,
                  setPostContent
                )
              }
            >
              Update Post
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

export default Blog;
