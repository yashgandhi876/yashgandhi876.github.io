import React from "react";

const Navbar = () => {
  return (
    <div className="header container">
      <nav
        id="nav2"
        className="navbar navbar-expand-lg navbar-dark bg-transpernt "
      >
        <a className="navbar-brand" href="./index.html">
          <img
            className="mt-3"
            id="ss"
            src={require("../assets/Sign.png")}
            alt="signature"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-row-reverse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a id="navitem1" className="nav-item nav-link" href="#projects">
              Projects
            </a>
            <a id="navitem2" className="nav-item nav-link" href="#About">
              About
            </a>
            <a id="navitem3" className="nav-item nav-link" href="#Contact">
              Contact
            </a>
            <button id="btn1" className="border-0 btn11">
              <i
                className="mn fa fa-moon-o mt-2 ml-2"
                style={{ fontSize: "25px" }}
                // "font-size: 25px;"
              ></i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
