import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    let links = {
      color: "#2d2d2f",
    };
    return (
      <div className="header container">
        <nav
          id="nav2"
          className="navbar navbar-light navbar-expand-lg bg-transpernt "
        >
          <a className="navbar-brand" href="/">
            <img
              className="mt-3"
              id="ss"
              src={require("../assets/wlogo.png")}
              alt="signature"
              width="100%"
            />
          </a>

          <button
            style={{ outline: "none" }}
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
              <Link to="/projects" style={links} className=" nav-item nav-link">
                Projects
              </Link>

              <Link to="/blogs" style={links} className=" nav-item nav-link">
                Blogs
              </Link>
              <a
                id="navitem3"
                style={links}
                className="nav-item  nav-link"
                href="#Contact"
              >
                Contact
              </a>
              <Link to="/aboutme" style={links} className="nav-item  nav-link">
                About
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
