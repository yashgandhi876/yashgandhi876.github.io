import React from "react";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <div className="container" id="projects">
      <div className="container">
        <h3 className="pt-4">Projects</h3>
        <div className="container">
          <br />
          <ul style={{ listStyleType: "none" }}>
            <ProjectItems
              href="http://mescoepune.org/alumni/"
              link="College Alumni Portal"
              par="It's team project, our college gave us an opportunity to work on
                live project from scratch. We used latest technology like HTML5,
                CSS3, BootStrap4 and Vanilla JavaScript ( ES6+ ) to create
                website."
            />
            <br />
            <ProjectItems
              href="https://github.com/yashgandhi2020/Antakshri_Game_With_Bot"
              link="Antakshari With Bot"
              par="Anatakshari game is basically we have to sing song which starts
              from last letter of privous song sing by opponent. I create this
              game using python. <br />
              <br />
              Why BOT? <br />( This is my first intelligent game and you will
              definitely lose game ; )"
            />
            <br />
            <ProjectItems
              href="https://github.com/yashgandhi2020/gitcheatsheet"
              link="GitHub Cheat Sheet"
              par="I created github cheat sheet for newbies in CS. It content all
              basic command, that will help to start with git & github. I used
              Mark-Down to create cheat sheet."
            />
            <br />
            <ProjectItems
              href="https://github.com/yashgandhi2020/Snake-Ladder-Game"
              link="Snake & Ladder Game"
              par="I created Snake and Ladder Game in second year for engineering
              using C. it has no UI, you can play on terminal."
            />
          </ul>
        </div>
      </div>
      <hr className="ununs underline" />
    </div>
  );
};

export default Projects;
