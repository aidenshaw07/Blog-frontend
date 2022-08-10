export const updatePost = (id, userId, axios, getData, postContent, setPostContent) => {
  const updateData = {
    content: postContent,
    user_id: userId,
  };
  axios
    .put(`http://localhost:8000/users/${userId}/posts/${id}/`, updateData)
    .then((response) => {
      getData();
      setPostContent("");
      console.log(id)
      console.log(response.data);
    });
};

export const deletePost = (id, axios, getData) => {
  axios.delete(`http://localhost:8000/posts/${id}/`).then((response) => {
    getData();
    console.log(id)
    console.log(response.data);
  });
};

export const createPost = (createContent, userId, axios, getData, setCreateContent) => {
  const data = {
    content: createContent,
    user_id: userId,
  };
  console.log(data);
  axios
    .post(`http://localhost:8000/posts/`, data)
    .then((response) => {
      getData();
      setCreateContent("");
      console.log(response.data);
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
