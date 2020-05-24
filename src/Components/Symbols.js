import React from "react";

const Symbols = () => {
  return (
    <div className="container made-with text-center">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.reactjs.org/"
      >
        <img
          alt="icon of reactjs"
          src={require("../assets/logo.svg")}
          className="ml-3 App-logo mb-5"
          title="Created using React"
          width="60px"
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/yashgandhi2020/yashgandhi2020.github.io"
      >
        <img
          alt="icon of github"
          src={require("../assets/github.png")}
          title="Open-source on GitHub"
          className="mr-3 mb-5 ml-3 "
          width="40px"
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.netlify.com/"
      >
        <img
          alt="icon of netlify"
          src={require("../assets/netlify.png")}
          className=" mb-5"
          title="Hosted by Netlify"
          width="40px"
        />
      </a>
      <img
        alt="icon of love"
        src={require("../assets/love.webp")}
        className=" mb-5 ml-3"
        title="Made with love"
        width="35px"
      />
    </div>
  );
};

export default Symbols;
