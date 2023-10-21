import "./index.css";
// import MyImage from "../assests/popup-image.png";

function Discover() {
  return (
    <div className="discover-main-container">
      <div className="absolute-block">
        <h1>WHY CHOOSE US</h1>
        <p>Discover the Advantages of myDEN Apartment Management App</p>
      </div>
      <div>
        <div className="icon-container">
          <div className="icon-image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"
                fill="#1570EF"
              />
            </svg>
          </div>
          <div className="icon-text-container">
            <h1>Comprehensive Solution</h1>
            <p>
              Our myDEN Apartment Management App offers an all-in-one solution
              for residents, gatekeepers, facility managers, and admins.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="mgmt-image-container">
        <div className="mgmt-image">
          <img src={MyImage} className="image-tag" alt="{My Image}" />
        </div>
        <div className="bottom-text-container">
          <p>
            Download our myDEN Apartment Management App and simplify your living
            experience!
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Discover;
