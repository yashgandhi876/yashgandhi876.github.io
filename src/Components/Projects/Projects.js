import React, { Component, createRef } from "react";
import ProjectItems from "./ProjectItems/ProjectItems";
import "./projects.css";
import Cal from "../../assets/Cal.jpg";
import Mes1 from "../../assets/mes1.jpg";
import Antakshari from "../../assets/antakshari.jpg";
import Snake_Ladder from "../../assets/s_l.jpg";
import Tic_Tac_Toe from "../../assets/tic_tac_toe.jpg";
import Portfolio from "../../assets/portfolio.jpg";

class Projects extends Component {
  prev_card = createRef();
  next_card = createRef();
  prev_card_virtual = createRef();
  prev_img = createRef();
  now_img = createRef();
  next_img = createRef();
  prev_pro_name = createRef();
  now_pro_name = createRef();
  next_pro_name = createRef();
  prev_pro_des = createRef();
  now_pro_des = createRef();
  next_pro_des = createRef();
  simple = createRef();
  classic = createRef();
  on_ho1 = createRef();
  on_ho2 = createRef();
  project_link = createRef();

  componentDidMount() {
    let current = 1;
    const projects = [
      {
        img: Portfolio,
        project_name: "Portfolio in React",
        description:
          "I create portfolio to showcase my certification, my skills all about me my all project also there. I build website in React, Bootstrap etc.",
        link: "https://yashgandhi.tech/",
      },
      {
        img: Mes1,
        project_name: "MESCOE Alumni Portal ",
        description:
          "We design and develop website for our college. This for our college alumni. My role in this internship is to design web pages, make and handle database. We mainly use technology like Vanilla JavaScript, HTML, Bootstrap.",
        link: "http://mescoepune.org/alumni/",
      },
      {
        img: Antakshari,
        project_name: "Antakshari game with bot",
        description:
          "I created Antakshari game with bot using Python. In this game player can't win solo. Logic behind this game is to bot remember last letter on song where u loss & throw song which start from that letter only. Human can not remember that much so it is really hard to win.",
        link: "https://github.com/yashgandhi2020/Antakshri_Game_With_Bot",
      },
      {
        img: Cal,
        project_name: "Calculator using React",
        description:
          "I create an web application Calculator using React. It is work with full functionality of keyboard.",
        link: "https://yashgandhi2020.github.io/Calculator/",
      },
      {
        img: Snake_Ladder,
        project_name: "Snake and Ladder Game",
        description:
          "I made this game using C as well as Python. This is simple snake and ladder game, we can play it on terminal.",
        link: "https://github.com/yashgandhi2020/Snake-Ladder-Game",
      },
      {
        img: Tic_Tac_Toe,
        project_name: "Tic-Tac-Toe Game",
        description:
          "Tic-Tac-Toe is our favorite game made using HTML,CSS,JS. You can play game right now if you want.",
        link: "https://yashgandhi2020.github.io/Tic-Tac_Toe/",
      },
    ];
    // projectjs
    let loadData = () => {
      try {
        if (current !== 0) {
          this.prev_img.current.src = projects[current - 1].img;
          this.prev_pro_name.current.innerHTML =
            projects[current - 1].project_name;
          this.prev_pro_des.current.innerHTML =
            projects[current - 1].description;
        }

        this.now_img.current.src = projects[current].img;
        this.now_pro_name.current.innerHTML = projects[current].project_name;
        this.now_pro_des.current.innerHTML = projects[current].description;
        this.project_link.current.href = projects[current].link;

        if (current !== 5) {
          this.next_img.current.src = projects[current + 1].img;
          this.next_pro_name.current.innerHTML =
            projects[current + 1].project_name;
          this.next_pro_des.current.innerHTML =
            projects[current + 1].description;
        }
      } catch (e) {
        console.error(e);
      }
    };

    loadData();

    this.prev_card.current.addEventListener("click", () => {
      current--;
      loadData();
      if (current === 0) {
        this.prev_card.current.classList.add("d-none");
        this.prev_card_virtual.current.classList.remove("d-none");
        this.next_card.current.classList.remove("d-none");
      } else {
        this.prev_card.current.classList.remove("d-none");
        this.prev_card_virtual.current.classList.add("d-none");
        this.next_card.current.classList.remove("d-none");
      }
    });
    this.next_card.current.addEventListener("click", () => {
      current++;
      loadData();
      if (current === 5) {
        this.prev_card.current.classList.remove("d-none");
        this.prev_card_virtual.current.classList.add("d-none");
        this.next_card.current.classList.add("d-none");
      } else {
        this.prev_card.current.classList.remove("d-none");
        this.prev_card_virtual.current.classList.add("d-none");
        this.next_card.current.classList.remove("d-none");
      }
    });

    if (window.outerWidth >= 768) {
      this.simple.current.classList.add("d-none");
      this.classic.current.classList.remove("d-none");
    } else if (window.outerWidth < 768) {
      this.classic.current.classList.add("d-none");
      this.simple.current.classList.remove("d-none");
    }

    window.addEventListener("resize", () => {
      if (window.outerWidth >= 768) {
        this.simple.current.classList.add("d-none");
        this.classic.current.classList.remove("d-none");
      } else if (window.outerWidth < 768) {
        this.classic.current.classList.add("d-none");
        this.simple.current.classList.remove("d-none");
      }
    });

    this.prev_card.current.addEventListener("mouseover", () => {
      this.on_ho1.current.classList.add("on_hover");
    });
    this.next_card.current.addEventListener("mouseover", () => {
      this.on_ho2.current.classList.add("on_hover");
    });
    this.prev_card.current.addEventListener("mouseout", () => {
      this.on_ho1.current.classList.remove("on_hover");
    });
    this.next_card.current.addEventListener("mouseout", () => {
      this.on_ho2.current.classList.remove("on_hover");
    });

    // project
  }

  render() {
    return (
      <div className="container" id="projects">
        <div className="container" ref={this.simple} id="simple">
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
        <div className="container" ref={this.classic} id="classic">
          <h3 className="pt-4">Projects</h3>
          <div className="row startPro container">
            {/* <!-- prev --> */}
            <div
              id="prev_card_virtual"
              ref={this.prev_card_virtual}
              className="prev col-sm-3 col-md-3 col-lg-3 d-none"
            ></div>
            <div
              id="prev_card"
              ref={this.prev_card}
              className="project-box prev col-sm-3 col-md-3 col-lg-3"
            >
              <div id="on_ho1" ref={this.on_ho1} className="d-none">
                <h1 className="click_me"> ⬅ </h1>
              </div>
              <div className="small_project_img">
                <img
                  id="prev_img"
                  ref={this.prev_img}
                  className="small_inner-project-img"
                  src={require("../../assets/s_l.jpg")}
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="project-name">
                <h5 id="prev_pro_name" ref={this.prev_pro_name}>
                  Project Name
                </h5>
              </div>
              <hr />
              <div className=" desmall describe">
                <p
                  className="container"
                  ref={this.prev_pro_des}
                  id="prev_pro_des"
                ></p>
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
                  ref={this.now_img}
                  className="inner-project-img"
                  src=""
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="project-name">
                <h5 id="now_pro_name" ref={this.now_pro_name}>
                  Project Name
                </h5>
              </div>
              <hr />
              <div className="describe">
                <p
                  className="container"
                  ref={this.now_pro_des}
                  id="now_pro_des"
                ></p>
              </div>
              <div className="btn-pro">
                <a
                  id="project_link"
                  ref={this.project_link}
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
              ref={this.next_card}
              className="project-box next col-sm-3 col-md-3 col-lg-3"
            >
              <div id="on_ho2" ref={this.on_ho2} className="d-none">
                <h1 className="click_me"> ➡ </h1>
              </div>
              <div className="small_project_img">
                <img
                  id="next_img"
                  ref={this.next_img}
                  className="small_inner-project-img"
                  src=""
                  alt=""
                />
              </div>
              <div className="project-name">
                <h5 id="next_pro_name" ref={this.next_pro_name}>
                  Project Name
                </h5>
              </div>
              <hr />
              <div className="desmall describe">
                <p
                  className="container "
                  ref={this.next_pro_des}
                  style={{ margin: "0px" }}
                  id="next_pro_des"
                ></p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
export default Projects;
