import React, { useState } from "react";

const CreatePost = ({ setContent, createPost }) => {
  const [popUp, setPopUp] = useState(true);

  const toggleModal = () => {
    setPopUp(!popUp);
  };

  if (popUp) {
    document.body.classList.add("active-popUp");
  } else {
    document.body.classList.remove("active-popUp");
  }

  return (
    <>
      {popUp && (
        <div className="popUp">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="popUp-content">
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={createPost}>Create Post</button>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePost;
