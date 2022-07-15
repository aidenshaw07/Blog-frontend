import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.post("http://localhost:8000/api/token/", {
      username: "aidenshaw",
      password: "Tansu1447",
    });
    const data = await response.data;

    const postResponse = await axios.get("http://localhost:8000/posts/", {
      headers: {
        Authorization: `Bearer ${data.access}`,
      },
    });
    const post = await postResponse.data;
    setData(data);
    console.log(data);
    console.log(post);
  };

  const renderData = data.map((item) => {
    return (
      <div key={item.id}>
        <h1>{item.firstName}</h1>
        <h2>{item.lastName}</h2>
        <h4>
          {item.posts.map((post) => {
            return (
              <div key={post.id}>
                <h4>{post.content}</h4>
              </div>
            );
          })}
        </h4>
      </div>
    );
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div>{renderData}</div>
    </div>
  );
};

export default Login;
