import React from "react";
import "./index.css";
import MyImage from "../assests/apartment-image.png";

const Apartment = () => {
  return (
    <div className="apartment-main-container">
      <div className="left-image-container">
        <div className="left-image">
          <img src={MyImage} className="image-tag" alt="{My Image}" />
        </div>
      </div>
      <div className="right-text-container">
        <h4>Welcome to myDEN Apartment Management App!</h4>
        <p className="subtitle">
          Simplify the management of your apartment complex with our
          comprehensive solution. Our app offers specialized modules for
          residents, gatekeepers, facility managers, and administrators,
          ensuring a seamless experience for everyone involved.
        </p>
      </div>
    </div>
  );
};

export default Apartment;
