import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../NavBar/NavBar";

const BlogPage = ({userId}) => {
  const [userData, setUserData] = useState([]);
  const [content, setContent] = useState("");

  const getData = async () => {
    const response = await axios.get("http://localhost:8000/users");
    const data = await response.data;
    console.log(data);
    setUserData(data);
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:8000/users/${id}/`).then((response) => {
      getData();
      console.log(response.data);
    });
  };

  const deletePost = (id) => {
    axios.delete(`http://localhost:8000/posts/${id}/`).then((response) => {
      getData();
      console.log(response.data);
    });
  };

  const createPost = () => {
    const data = {
        content: content,
        user_id: userId,
    }
    console.log(data);
    axios
      .post(`http://localhost:8000/posts/`, data)
      .then((response) => {
        getData();
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderData = userData.map((item) => {
    return (
      <div key={item.id}>
        <h1>{item.firstName}</h1>
        <h2>{item.lastName}</h2>
        <button onClick={() => deleteUser(item.id)}>Delete</button>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={createPost}>Create Post</button>
        <h4>
          {item.posts.map((post) => {
            return (
              <div key={post.id}>
                <h4>{post.content}</h4>
                <button onClick={() => deletePost(post.id)}>DeletePost</button>
              </div>
            );
          })}
        </h4>
      </div>
    );
  });

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="data">
      <NavBar />
      <div>{renderData}</div>
    </div>
  );
};

export default BlogPage;
