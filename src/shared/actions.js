export const updatePost = (id, userId, axios, getData, postContent, setPostContent) => {
  const updateData = {
    content: postContent,
    user_id: userId,
  };
  axios
    .put(`https://aidenshaw-blogpage.herokuapp.com/users/${userId}/posts/${id}/`, updateData)
    .then((response) => {
      getData();
      setPostContent("");
      // console.log(response.data);
    });
};

export const updateUserName = (userId, newFirstName, newLastName, setNewFirstName, setNewLastName, axios, getData) => {
  const updateNames = {
    firstName: newFirstName,
    lastName: newLastName,
  };
  axios.put(`https://aidenshaw-blogpage.herokuapp.com/users/${userId}/`, updateNames).then((response) => {
    getData();
    setNewFirstName("");
    setNewLastName("");
    console.log(response.data);
    console.log("Hello");
  });
}


export const deletePost = (id, axios, getData) => {
  axios.delete(`https://aidenshaw-blogpage.herokuapp.com/posts/${id}/`).then((response) => {
    getData();
    // console.log(response.data);
  });
};

export const createPost = (createContent, userId, axios, getData, setCreateContent) => {
  const data = {
    content: createContent,
    user_id: userId,
  };
  // console.log(data);
  axios
    .post(`https://aidenshaw-blogpage.herokuapp.com/users/${userId}/posts/`, data)
    .then((response) => {
      getData();
      setCreateContent("");
      // console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// const deleteUser = (id) => {
//   axios.delete(`http://localhost:8000/users/${id}/`).then((response) => {
//     getData();
//     console.log(response.data);
//   });
// };
