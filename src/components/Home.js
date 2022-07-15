import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = ({ userData }) => {

  const renderData = userData.map((item) => {
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

  return (
    <div>
      <h1>Home</h1>
      <div>{renderData}</div>
    </div>
  );
};

export default Login;
