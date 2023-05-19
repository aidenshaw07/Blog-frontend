import axios from "axios";

export const updatePost = (getUserData, setModal, id, userId, postContent, setPostContent) => {
  const updateData = {
    content: postContent,
    user_id: userId,
  };
  axios.put(
    `https://aidenshaw-blogpage.herokuapp.com/users/${userId}/posts/${id}/`,
    updateData
  );
  setPostContent("");
  getUserData();
  setModal(false);
};

export const deletePost = (getUserData, id) => {
  axios
    .delete(`https://aidenshaw-blogpage.herokuapp.com/posts/${id}/`)
    .then((response) => {
      // console.log(response.data);
      getUserData();
    });
};

export const createPost = (getUserData, setModal, createContent, userId, setCreateContent) => {
  const data = {
    content: createContent,
    user_id: userId,
  };
  axios
    .post(
      `https://aidenshaw-blogpage.herokuapp.com/users/${userId}/posts/`,
      data
    )
    .then((response) => {
      getUserData();
      setModal(false);
      setCreateContent("");
      // console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

  // export const updateUserName = (
  //   getUserData,
  //   userId,
  //   newFirstName,
  //   newLastName,
  //   setNewFirstName,
  //   setNewLastName,
  //   loggedInUserEmail
  // ) => {
  //   const updateNames = {
  //     firstName: newFirstName,
  //     lastName: newLastName,
  //     userId: userId,
  //     password: "test",
  //     email: loggedInUserEmail,
  //     photo_url: "test",
  //   };
  //   axios
  //     .put(
  //       `https://aidenshaw-blogpage.herokuapp.com/users/${userId}/`,
  //       updateNames
  //     )
  //     .then((response) => {
  //       setNewFirstName("");
  //       setNewLastName("");
  //       getUserData();
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.request);
  //     });
  // };

// export const deleteUser = (getUserData, userId) => {
// axios.delete(`https://aidenshaw-blogpage.herokuapp.com/users/${userId}/`).then((response) => {
//     getUserData();
//     console.log(response.data);
//   });
// };
