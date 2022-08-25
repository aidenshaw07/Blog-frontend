import React, { Fragment } from "react";
import imageblog from "./blog2.avif";
import "./blogPage.scss";

import Blog from "./Blog";

const BlogPage = ({ allUsers, userId, getUserData }) => {
  const renderData = allUsers.map((item) => {
    const postOrder = [...item.posts].sort((a, b) => {
      return b.id - a.id;
    });
    // console.log(postOrder);
    return (
      <Fragment key={item.id}>
        {postOrder.map((post, i) => (
          <Blog
            key={i}
            post={post}
            userId={userId}
            firstName={item.firstName}
            lastName={item.lastName}
            getUserData={getUserData}
          />
        ))}
      </Fragment>
    );
  });

  return (
    <div className="background">
      <div className="cubes">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>
      <div className="data">{renderData}</div>
    </div>
  );
};

export default BlogPage;
