import React from "react";

const Symbols = () => {
  return (
    <div className="made pb-4 mt-4 ml-3">
      <p className="text-center mt-1">
        made with{" "}
        <img
          alt="icon of love"
          src={require("../../assets/love.webp")}
          className="  "
          title="Made with love"
          width="25px"
        />{" "}
        by me
      </p>
    </div>
  );
};

export default Symbols;
