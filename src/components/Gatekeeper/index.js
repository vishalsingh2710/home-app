import React from "react";
import "./index.css";
import MyImage from "../assests/gatekeeper-image.png";

const Gatekeeper = () => {
  return (
    <div className="gatekeeper-main-container">
      <div className="left-image-container">
        <div className="left-image">
          <img src={MyImage} className="image-tag" alt="{My Image}" />
        </div>
      </div>
      <div className="right-text-container">
        <p className="title">GATEKEEPER</p>
        <h4>Enhanced Security and Effortless Entry</h4>
        <p className="subtitle">
          Our Gatekeeper Module revolutionizes visitor management. Gatekeepers
          can efficiently manage visitor access, track deliveries, and maintain
          communication with residents. Say goodbye to long queues and
          time-consuming paperwork. <br /><br/>
          Experience a new level of security and convenience with our app.
        </p>
        <span>
          <a href="/">
            <button className="btn">
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.9741 9.99989L6.84912 5.87489L8.02745 4.69656L13.3308 9.99989L8.02745 15.3032L6.84912 14.1249L10.9741 9.99989Z"
                  fill="white"
                />
              </svg>
            </button>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Gatekeeper;
