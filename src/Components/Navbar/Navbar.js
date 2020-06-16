import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    let links = {
      color: "#fff",
    };
    return (
      <div className="header container" style={{ padding: "0px" }}>
        <nav
          id="nav2"
          style={{ padding: "0px" }}
          className="navbar navbar-dark navbar-expand-lg bg-transpernt "
        >
          <Link className="navbar-brand" to="/">
            <img
              className="mt-3"
              id="ss"
              src={require("../../assets/wlogo.png")}
              alt="signature"
              width="100%"
            />
          </Link>

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
