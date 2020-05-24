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
              href="https://yashgandhi.tech/"
              link="Portfolio in React"
              par="I create portfolio to showcase my certification, my skills all about me my all project also there. I build website in React, Bootstrap etc.."
            />
            <br />
            <ProjectItems
              href="http://mescoepune.org/alumni/"
              link="College Alumni Portal"
              par="We design and develop website for our college.
               This for our college alumni. My role in this internship is to design web pages,
                make and handle database. We mainly use technology like 
                Vanilla JavaScript ES6+ , HTML, Bootstrap.s"
            />
            <br />
            <ProjectItems
              href="https://github.com/yashgandhi2020/Antakshri_Game_With_Bot"
              link="Antakshari With Bot"
              par="I created Antakshari game with bot using Python. In this game player can't win solo. Logic behind this game is to bot remember last letter on song where u loss & throw song which start from that letter only. Human can not remember that much so it is really hard to win. &lt;br /&gt;
              &lt;br /&gt;
              Why BOT? &lt;br /&gt;( This is my first intelligent game and you will
              definitely lose game ; )"
            />
            <br />
            <ProjectItems
              href="https://yashgandhi2020.github.io/Calculator/"
              link="Calculator using React"
              par="I create an web application Calculator using React. It is work with full functionality of keyboard."
            />
            <br />
            <ProjectItems
              href="https://yashgandhi2020.github.io/Tic-Tac_Toe/"
              link="Tic-Tac-Toe Game"
              par="Tic-Tac-Toe is our favorite game made using HTML,CSS,JS. You can play game right now if you want 😁."
            />
            <br />
            <ProjectItems
              href="https://github.com/yashgandhi2020/Snake-Ladder-Game"
              link="Snake & Ladder Game"
              par="I created Snake and Ladder Game in second year for engineering
              using C. it has no UI, you can play on terminal."
            />
            <br />
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
            <div id="on_ho1" className="d-none">
              <h3 className="click_me"> ⬅Click Me </h3>
            </div>
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
            <hr />
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
            <hr />
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
            <div id="on_ho2" className="d-none">
              <h3 className="click_me"> Click Me➡ </h3>
            </div>
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
            <hr />
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
