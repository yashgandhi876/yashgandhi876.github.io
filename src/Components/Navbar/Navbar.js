import React, { Component } from "react";
import { Link } from "react-router-dom";
import file from "../../assets/Resume/resume.pdf";
import { createRef } from "react";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.togglerbtn = createRef();
    this.showMobileNav = createRef();
  }

  componentDidMount() {
    this.togglerbtn.current.addEventListener("click", () => {
      this.showMobileNav.current.classList.toggle("collapse");
    });
  }

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
              src={require("../../assets/Images/wlogo.png")}
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
            ref={this.togglerbtn}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            style={{
              transition: "opacity 1s ease-out",
            }}
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarNavAltMarkup"
            ref={this.showMobileNav}
          >
            <div className="navbar-nav">
              <Link
                to="/projects"
                id="navitem1"
                style={links}
                className=" nav-item nav-link"
              >
                Projects
              </Link>

              <Link
                to="/blogs"
                id="navitem2"
                style={links}
                className=" nav-item nav-link"
              >
                Blogs
              </Link>
              <Link
                to="/aboutme"
                id="navitem3"
                style={links}
                className="nav-item  nav-link"
              >
                About
              </Link>
              <a
                style={{
                  color: "#fff",
                  display: "block",
                  padding: ".5rem 0px",
                  textDecoration: "none",
                }}
                href={file}
                download="Yash_Gandhi_Resume.pdf"
              >
                Resume
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
