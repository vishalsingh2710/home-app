import React from "react";
import "./index.css";
import MyImage from "../assests/facility-image.png";

const Facility = () => {
  return (
    <div className="facility-main-container">
      <div className="left-image-container">
        <div className="left-image">
          <img src={MyImage} className="image-tag" alt="{My Image}" />
        </div>
      </div>
      <div className="right-text-container">
        <p className="title">FACILITY MANAGEMENT</p>
        <h4>Efficient Amenities and Resource Allocation</h4>
        <p className="subtitle">
          Facility managers, say hello to streamlined operations. Our Facility
          Management Module allows you to oversee amenities, schedule
          maintenance, and handle resident requests with ease. Keep residents
          satisfied and resources optimized. 
          <br /><br/>
          Join other facility managers who trust our app to manage their 
          communities efficiently.
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

export default Facility;
