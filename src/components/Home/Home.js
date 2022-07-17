import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import "./home.scss";

const Login = ({ userData, setUserData, getData }) => {
  const location = useLocation();

  const deleteUser = (id) => {
    axios.delete(`http://localhost:8000/users/${id}/`).then((response) => {
      getData();
      console.log(response.data);
    });
  };

  const deletePost = (id) => {
    axios.delete(`http://localhost:8000/post/${id}/`).then((response) => {
      getData();
      console.log(response.data);
    });
  };

  const renderData = userData.map((item) => {
    return (
      <div key={item.id}>
        <h1>{item.firstName}</h1>
        <h2>{item.lastName}</h2>
        <button onClick={() => deleteUser(item.id)}>Delete</button>
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
        <nav>
          {location.pathname === "/" ? null : <NavBar /> &&
            location.pathname === "/sign-up" ? null : (
            <NavBar />
          )}
        </nav>
        <div>{renderData}</div>
    </div>
  );
};

export default Login;
