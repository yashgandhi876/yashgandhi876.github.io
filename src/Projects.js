import React from "react";
const Projects = () => {
  return (
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
                It's team project, our college gave us an opportunity to work on
                live project from scratch. We used latest technology like HTML5,
                CSS3, BootStrap4 and Vanilla JavaScript ( ES6+ ) to create
                website.
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
                Anatakshari game is basically we have to sing song which starts
                from last letter of privous song sing by opponent. I create this
                game using python. <br />
                <br />
                Why BOT? <br />( This is my first intelligent game and you will
                definitely lose game ; )
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
                basic command, that will help to start with git & github. I used
                Mark-Down to create cheat sheet.
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
  );
};

export default Projects;
