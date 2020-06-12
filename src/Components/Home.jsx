import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      showBorder: true,
    };
  }

  render() {
    const style = {
      color: "black",
      backgroundColor: "rgba(163, 159, 220,0.5)",
    };
    return (
      <div className="container ma">
        <div className="row mt-5 mr-3 ml-3">
          <h1>Hey, I'm Yash Gandhi</h1>
          <img src={require("../assets/lng.png")} alt="Me" width="70px" />
        </div>
        <div
          style={{ justifyContent: "center" }}
          className="row mt-5 mb-5 mr-3 ml-3"
        >
          <div className="row">
            <h3>I'm</h3>
            &nbsp;
            <h3>
              <Typewriter
                options={{
                  strings: [
                    " Web Developer",
                    " Learner",
                    " Front-End Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
          </div>
        </div>
        <div className="mt-5 ">
          <p>
            I made cool projects and share with world{" "}
            <Link style={style} to="/projects">
              you can check here
            </Link>
            . I can help you with your projects also{" "}
            <Link style={style} to="/projects">
              Contact me
            </Link>
            .
          </p>
          <p>
            I share some good tips about web development and some cool stuff on
            twitter you can{" "}
            <a
              style={style}
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/yashgandhi876"
            >
              follow me here
            </a>
          </p>
          <p>
            you can read more{" "}
            <Link style={style} to="/aboutme">
              about me here
            </Link>
            .
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
