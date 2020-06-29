import React from "react";

const NotFound = () => {
  return (
    <div className="container">
      <div style={{ alignItems: "center" }} className="row mt-5">
        <div className="col-6">
          <h1>404 Error</h1>
          <p>Page Not Found</p>
        </div>
        <div className="col-6">
          <img
            src={require("../../assets/Images/robot.png")}
            alt="robot img"
            width="50%"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
