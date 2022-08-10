import React from "react";
import LoginButton from "../Login/LoginButton";
import "./landing.scss";
import image from "./landing-bgpicture.avif";

const Landing = () => {
  return (
    <div style={{ backgroundImage: `url(${image})` }}>
      <div className="container">
        <div className="quoc">
          <div className="word">
            <h2>
              Click "THE BUTTON" If You Want To See What's on The Other Side!
            </h2>
          </div>
          <LoginButton />
        </div>

        <div className="designer">
          <p>Designed by AidenShaw</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
