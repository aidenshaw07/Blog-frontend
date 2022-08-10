import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import imageblog from "./blog2.avif";
import "./blogPage.scss";

import Blog from "./Blog";

const BlogPage = ({ userData, getData, userId }) => {
  const renderData = userData.map((item) => {
    const postOrder = [...item.posts].sort((a, b) => {
      return a.id - b.id;
    });
    console.log(postOrder);
    return (
      <Fragment key={item.id}>
        {postOrder.map((post, i) => (
          <Blog
            key={i}
            post={post}
            userId={userId}
            firstName={item.firstName}
            lastName={item.lastName}
            getData={getData}
            axios={axios}
          />
        ))}
      </Fragment>
    );
  });

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${imageblog})` }}
    >
      <div className="data">{renderData}</div>
    </div>
  );
};

export default BlogPage;
