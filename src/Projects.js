import React from "react";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <div className="container" id="projects">
      <div className="container" id="simple">
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
              game using python. &lt;br /&gt;
              &lt;br /&gt;
              Why BOT? &lt;br /&gt;( This is my first intelligent game and you will
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
      <div className="container" id="classic">
        <h3 className="pt-4">Projects</h3>
        <div className="row container mt-5">
          {/* <!-- prev --> */}
          <div
            id="prev_card_virtual"
            className="prev col-sm-3 col-md-3 col-lg-3 d-none"
          ></div>
          <div
            id="prev_card"
            className="project-box prev col-sm-3 col-md-3 col-lg-3"
          >
            <div className="small_project_img">
              <img
                id="prev_img"
                className="small_inner-project-img"
                src={require("./img/s_l.jpg")}
                alt=""
                width="100%"
                height="100%"
              />
            </div>
            <div className="project-name">
              <h5 id="prev_pro_name">Project Name</h5>
            </div>
            <div className="describe">
              <p className="container" id="prev_pro_des"></p>
            </div>
          </div>
          {/* <!-- now --> */}
          <div
            id="now_card"
            className="project-box now col-sm-6 col-md-6 col-lg-6"
          >
            <div className="project-img">
              <img
                id="now_img"
                className="inner-project-img"
                src=""
                alt=""
                width="100%"
                height="100%"
              />
            </div>
            <div className="project-name">
              <h5 id="now_pro_name">Project Name</h5>
            </div>
            <div className="describe">
              <p className="container" id="now_pro_des"></p>
            </div>
            <div className="btn-pro">
              <a
                id="project_link"
                className="view-pro"
                href="./"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                View Project➡{" "}
              </a>
            </div>
          </div>
          {/* <!-- next --> */}
          <div
            id="next_card"
            className="project-box next col-sm-3 col-md-3 col-lg-3"
          >
            <div className="small_project_img">
              <img
                id="next_img"
                className="small_inner-project-img"
                src=""
                alt=""
              />
            </div>
            <div className="project-name">
              <h5 id="next_pro_name">Project Name</h5>
            </div>
            <div className="describe">
              <p className="container truncate" id="next_pro_des"></p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr className="ununs underline" />
    </div>
  );
};
export default Projects;
