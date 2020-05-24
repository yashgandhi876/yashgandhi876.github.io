import React from "react";

const Intro = () => {
  return (
    <div className="container">
      <div className="container">
        <h1 className="pt-4">
          Hey, I'm Yash
          <img
            src={require("../assets/lng.png")}
            alt="logo"
            style={{ width: "55px" }}
          />
        </h1>
        <br />
        <p className="ml-3 pl-3 mr-4 text-justify" style={{ fontSize: "23px" }}>
          I'm studying at
          <a
            href="http://mescoepune.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            MESCOE
          </a>
          . I create awesome web sites and web applications.
        </p>
        <hr className="ununs underline" />
      </div>
    </div>
  );
};

export default Intro;
