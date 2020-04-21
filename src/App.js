import React from "react";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="header container">
        <nav
          id="nav2"
          className="navbar navbar-expand-lg navbar-dark bg-transpernt "
        >
          <a className="navbar-brand" href="./index.html">
            <img
              className="mt-3"
              id="ss"
              src={require("./img/Sign.png")}
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
      <div id="upar" className="uparrow d-none">
        <button id="btn2" className="uparrow upc btn11">
          <i id="upicon" className="fa fa-angle-double-up upi uparrow"></i>
        </button>
      </div>
      <div className="container">
        <div className="container">
          <h1 className="pt-4">
            Hey, I'm Yash
            <img
              src={require("./img/lng.png")}
              alt="logo"
              style={{ width: "55px" }}
            />
          </h1>
          <br />
          <p
            className="ml-3 pl-3 mr-4 text-justify"
            style={{ fontSize: "23px" }}
          >
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
      <div className="container" id="projects">
        <div className="container">
          <h3 className="pt-4">Projects</h3>
          <div className="container">
            <br />
            <ul style={{ listStyleType: "none" }}>
              <li>
                <h4>
                  <a
                    href="http://mescoepune.org/alumni/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    College Alumni Portal
                  </a>
                </h4>
                <p className="ml-3">
                  It's team project, our college gave us an opportunity to work
                  on live project from scratch. We used latest technology like
                  HTML5, CSS3, BootStrap4 and Vanilla JavaScript ( ES6+ ) to
                  create website.
                </p>
              </li>
              <br />
              <li>
                <h4>
                  <a
                    href="https://github.com/yashgandhi2020/Antakshri_Game_With_Bot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Antakshari With Bot
                  </a>
                </h4>
                <p className="ml-3">
                  Anatakshari game is basically we have to sing song which
                  starts from last letter of privous song sing by opponent. I
                  create this game using python. <br />
                  <br />
                  Why BOT? <br />( This is my first intelligent game and you
                  will definitely lose game ; )
                </p>
              </li>
              <br />
              <li>
                <h4>
                  <a
                    href="https://github.com/yashgandhi2020/gitcheatsheet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Cheat Sheet
                  </a>
                </h4>
                <p className="ml-3">
                  I created github cheat sheet for newbies in CS. It content all
                  basic command, that will help to start with git & github. I
                  used Mark-Down to create cheat sheet.
                </p>
              </li>
              <br />
              <li>
                <h4>
                  <a
                    href="https://github.com/yashgandhi2020/Snake-Ladder-Game"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Snake & Ladder Game
                  </a>
                </h4>
                <p className="ml-3">
                  I created Snake and Ladder Game in second year for engineering
                  using C. it has no UI, you can play on terminal.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <hr className="ununs underline" />
      </div>
      <br />
      <div className="container" id="About">
        <div className="container">
          <h3>About</h3>
          <br />
          <div className="container">
            <p className="ml-5">
              Hey there, I'm Yash Gandhi, I am pursuing a Bachelor of
              Engineering in Computer Science degree from
              <a
                href="http://www.mescoepune.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MESCOE
              </a>
              pune. At the very beginning I don't even know what is programming,
              who are the coders. <br />
              <br />
              In second year of first half-term, I learnt C language. then I
              learnt many core-things like Data Structure, Algorithms, OOP
              concepts, C++ etc. My siblings are Full Stack Developer, so they
              always helps me while learning HTML5, CSS3, JavaScript.
            </p>
            <p className="ml-5">
              After half-term, I learn JAVA ( due to university syllabus but I
              like it's speed{" "}
              <span role="img" aria-label="awesome">
                🤩
              </span>{" "}
              ) and Python ( Popular language ) I like python too. Concurrently
              I'm making some web pages ( as i
              <span role="img" aria-label="love">
                💖
              </span>{" "}
              web ) then I learn CSS, Bootstrap and JavaScript.
            </p>
            <p className="ml-5">
              Now in third year, I got opportunity to work on live project from
              scratch i.e. alumni portal website, because of this project I
              learn many things of javascript, database ( we used firebase ).
              and now I started learning react, let's see how my journey goes{" "}
              <span role="img" aria-label="smile">
                🙂
              </span>
            </p>
          </div>
        </div>
        <hr className="ununs underline" />
      </div>
      <br />
      <div className="container" id="Contact">
        <div className="container">
          <h3>Contact</h3>
          <br />
          <div className="container-fluid row pl-1 pr-0">
            <div className="container col-sm-12 col-lg-6 col-md-6 pr-0">
              <ul>
                <li>
                  LinkedIn :
                  <a
                    href="https://www.linkedin.com/in/yash-gandhi-0a4010167/"
                    target="_blank"
                    title=" For Professional use Only "
                    rel="noopener noreferrer"
                  >
                    Yash Gandhi
                  </a>
                </li>
                <br />
                <li>
                  Instagram :
                  <a
                    href="https://www.instagram.com/yashgandhi876/"
                    target="_blank"
                    title="To showcase my travel photos 😁"
                    rel="noopener noreferrer"
                  >
                    yashgandhi876
                  </a>
                </li>
                <br />
                <li>
                  FaceBook :
                  <a
                    href="https://www.facebook.com/profile.php?id=100034058533973"
                    target="_blank"
                    title="Rarely active"
                    rel="noopener noreferrer"
                  >
                    Yash Gandhi
                  </a>
                </li>
              </ul>
              <br />
            </div>
            <div className="container col-sm-12 col-lg-6 col-md-6">
              <ul>
                <li>
                  Email :
                  <a
                    href="mailto:yashgandhi876@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="yashgandhi876@gmail.com For work."
                  >
                    yashgandhi876
                  </a>
                </li>
                <br />
                <li>
                  GitHub :
                  <a
                    href="https://github.com/yashgandhi2020"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="you will get all my project's here. )"
                  >
                    yashgandhi2020
                  </a>
                </li>
                <br />
                <li>
                  Twitter :
                  <a
                    href="https://twitter.com/yashgandhi876"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="best place to get in touch with awesome people, i share web info and sometimes dev joks too 😉."
                  >
                    yashgandhi876
                  </a>
                </li>
                <br />
              </ul>
            </div>
          </div>
        </div>
        <hr className="ununs underline" />
      </div>
      <div className="container made-with text-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.netlify.com/"
        >
          <img
            alt="icon of reactjs"
            src={require("./img/logo.svg")}
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
            src={require("./img/github.png")}
            title="Open-source on GitHub"
            className="mr-3 mb-5 ml-3"
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
            src={require("./img/netlify.png")}
            className=" mb-5"
            title="Hostby by Netlify"
            width="40px"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
