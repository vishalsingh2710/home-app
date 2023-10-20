import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <div className="main-news-footer-container">
      <div className="footer-news-text-news">
        <div className="footer-news-text">
          <h4>Sign up for our newsletter!</h4>
          <p>Get notified about launch, updates and weekly blogs.</p>
        </div>
        <div className="footer-news-subscribe">
          <input
            className="input-news"
            type="text"
            placeholder="Enter your email"
          />
          <button className="news-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
