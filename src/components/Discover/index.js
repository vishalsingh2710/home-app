import React from "react";
import "./index.css";
import MyImage from "../assests/popup-image.png";

const Discover = () => {
  // Create an array to hold the content for each grid cell
  const gridContent = [
    {
      svg: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="8" fill="#EFF8FF" />
          <path
            d="M24 34C18.477 34 14 29.523 14 24C14 18.477 18.477 14 24 14C29.523 14 34 18.477 34 24C34 29.523 29.523 34 24 34ZM23 27V29H25V27H23ZM23 19V25H25V19H23Z"
            fill="#1570EF"
          />
        </svg>
      ),
      text: "Comprehensive Solution",
      subtext:
        "Our myDEN Apartment Management App offers an all-in-one solution for residents, gatekeepers, facility managers, and admins.",
    },
    {
      svg: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="8" fill="#EFF8FF" />
          <path
            d="M24 34C18.477 34 14 29.523 14 24C14 18.477 18.477 14 24 14C29.523 14 34 18.477 34 24C34 29.523 29.523 34 24 34ZM23 27V29H25V27H23ZM23 19V25H25V19H23Z"
            fill="#1570EF"
          />
        </svg>
      ),
      text: "Enhanced Convenience",
      subtext:
        "Residents can handle payments and maintenance effortlessly, while gatekeepers efficiently manage visitor access, all from their smartphones.",
    },
    {
      svg: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="8" fill="#EFF8FF" />
          <path
            d="M24 34C18.477 34 14 29.523 14 24C14 18.477 18.477 14 24 14C29.523 14 34 18.477 34 24C34 29.523 29.523 34 24 34ZM23 27V29H25V27H23ZM23 19V25H25V19H23Z"
            fill="#1570EF"
          />
        </svg>
      ),
      text: "Advanced Security",
      subtext:
        "Our Gatekeeper Module ensures a secure environment by tracking visitor entry and enhancing access control, ensuring the safety of your community.",
    },
    {
      svg: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="8" fill="#EFF8FF" />
          <path
            d="M24 34C18.477 34 14 29.523 14 24C14 18.477 18.477 14 24 14C29.523 14 34 18.477 34 24C34 29.523 29.523 34 24 34ZM23 27V29H25V27H23ZM23 19V25H25V19H23Z"
            fill="#1570EF"
          />
        </svg>
      ),
      text: "Streamlined Operations",
      subtext:
        "Facility managers can optimize resource allocation and maintenance schedules with our App, ensuring smooth operations and satisfied residents.",
    },
    {
      svg: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="8" fill="#EFF8FF" />
          <path
            d="M24 34C18.477 34 14 29.523 14 24C14 18.477 18.477 14 24 14C29.523 14 34 18.477 34 24C34 29.523 29.523 34 24 34ZM23 27V29H25V27H23ZM23 19V25H25V19H23Z"
            fill="#1570EF"
          />
        </svg>
      ),
      text: "Data-Driven Insights",
      subtext:
        "Our Admin Dashboard Module empowers administrators with valuable data analytics and insights.",
    },
    {
      svg: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="8" fill="#EFF8FF" />
          <path
            d="M24 34C18.477 34 14 29.523 14 24C14 18.477 18.477 14 24 14C29.523 14 34 18.477 34 24C34 29.523 29.523 34 24 34ZM23 27V29H25V27H23ZM23 19V25H25V19H23Z"
            fill="#1570EF"
          />
        </svg>
      ),
      text: "Customer Satisfaction",
      subtext:
        "Join thousands of happy users who already trust our app to improve their apartment management.",
    },
    {
      svg: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="8" fill="#EFF8FF" />
          <path
            d="M24 34C18.477 34 14 29.523 14 24C14 18.477 18.477 14 24 14C29.523 14 34 18.477 34 24C34 29.523 29.523 34 24 34ZM23 27V29H25V27H23ZM23 19V25H25V19H23Z"
            fill="#1570EF"
          />
        </svg>
      ),
      text: "Customizable & Scalable",
      subtext:
        "Whether you manage a small complex or a large-scale property, our app is designed to scale with your requirements.",
    },
    {
      svg: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="8" fill="#EFF8FF" />
          <path
            d="M24 34C18.477 34 14 29.523 14 24C14 18.477 18.477 14 24 14C29.523 14 34 18.477 34 24C34 29.523 29.523 34 24 34ZM23 27V29H25V27H23ZM23 19V25H25V19H23Z"
            fill="#1570EF"
          />
        </svg>
      ),
      text: "Dedicated Support",
      subtext:
        "Our dedicated support team is ready to address your queries and ensure a smooth experience with our app.",
    },
  ];

  return (
    <div className="discover-main-container">
      <div className="discover-content-container">
        <div className="discover-text-content-container">
          <p>WHY CHOOSE US</p>
          <h5>Discover the Advantages of myDEN Apartment Management App</h5>
        </div>
        <div className="center-content-container">
          <div className="grid-container">
            {gridContent.map((content, index) => (
              <div key={index} className="grid-item">
                {content.svg}
                <div className="title-text">{content.text}</div>
                <div className="subtext-text">{content.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="discover-bottom-container">
        <div className="discover-mgmt-image">
          <img src={MyImage} className="image-tag-discover" alt="{My Image}" />
        </div>
        <div className="bottom-all-text">
          <h4>Ready to Experience the Future of Apartment Management?</h4>
          <p>Join myDEN app to manage your communities efficiently.</p>
          <span>
            <a href="/">
              <button class="btn">Contact Us</button>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Discover;
