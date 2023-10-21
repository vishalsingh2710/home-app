import React from "react";
import "./index.css";
import MyImage from "../assests/resident-image.png";

const Resident = () => {
  return (
    <div className="resident-main-container">
      <div className="left-image-container">
        <div className="left-image">
          <img src={MyImage} className="image-tag" alt="{My Image}" />
        </div>
      </div>
      <div className="right-text-container">
        <p className="title">RESIDENT</p>
        <h4>Discover the Power of Convenience</h4>
        <p className="subtitle">
          Our Resident Module empowers residents to take control of their living
          experience. From paying rent and utility bills to requesting
          maintenance services, everything is just a tap away. Stay up-to-date
          with community announcements and effortlessly communicate with your
          neighbors. Join thousands of happy residents who already enjoy the
          benefits of our app.
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

export default Resident;
