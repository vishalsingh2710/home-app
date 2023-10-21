import React from "react";
import "./index.css";
import MyImage from "../assests/admin-image.png";

const Admin = () => {
  return (
    <div className="admin-main-container">
      <div className="left-image-container">
        <div className="left-image">
          <img src={MyImage} className="image-tag" alt="{My Image}" />
        </div>
      </div>
      <div className="right-text-container">
        <p className="title">ADMIN DASHBOARD</p>
        <h4>Data-Driven Decisions Made Simple</h4>
        <p className="subtitle">
          For administrators, our Admin Dashboard Module provides comprehensive
          data analytics and insights. Monitor activities, track trends, and
          manage the entire apartment complex efficiently. Make well-informed
          decisions to ensure a thriving community. 
          <br /><br/>
          Discover the power of data with our intuitive admin dashboard.
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

export default Admin;
