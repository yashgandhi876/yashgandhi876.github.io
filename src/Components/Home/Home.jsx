import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import "./Home.css";

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
      <div className="container mainss">
        <div className="row mt-3 mr-3 ml-1">
          <h2 className="pt-3">
            {" "}
            <strong> Hey, I'm Yash</strong>
          </h2>
          <img
            src={require("../../assets/Images/lng.png")}
            alt="Me"
            width="70px"
          />
        </div>
        <div
          style={{ justifyContent: "center" }}
          className="row mt-5 mb-5 mr-3 ml-3"
        >
          <div className="row">
            <h2>I'm</h2>
            &nbsp;
            <h2>
              <Typewriter
                options={{
                  strings: [
                    " a Student",
                    " Web Developer",
                    " Continuous Learner",
                    " Frontend Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </div>
        </div>
        <div className="mt-5 ">
          <p>I am a full stack javascript developer from India.</p>
          <p>
            I have developed some cool projects and have hosted them on {" "}
            <a
              style={style}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/yashgandhi876"
            >
              github.
            </a>{" "}
            I can help you with your projects, drop a mail at{" "}
            yashgandhi876@gmail.com
          </p>
          <p>
            Most of the time, I talk about web development and some other cool
            stuff on{" "}
            <a
              style={style}
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/yashgandhi876"
            >
              twitter.
            </a>
          </p>
          <p>
            You can read more{" "}
            <Link style={style} to="/aboutme">
              about me.
            </Link>
          </p>
          <p>
            If you like this website don't forget to hit{" "}
            <a
              style={style}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/yashgandhi876/yashgandhi.tech"
            >
              star button on github.
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
