import React, { Component, createRef } from "react";
import ProjectItems from "./ProjectItems/ProjectItems";
import "./projects.css";
import Cal from "../../assets/Images/Cal.jpg";
import Mes1 from "../../assets/Images/mes1.jpg";
import Antakshari from "../../assets/Images/antakshari.jpg";
import Snake_Ladder from "../../assets/Images/s_l.jpg";
import Tic_Tac_Toe from "../../assets/Images/tic_tac_toe.jpg";
import Portfolio from "../../assets/Images/portfolio.jpg";

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
  projects = [
    {
      id: 1,
      img: Portfolio,
      project_name: "Portfolio in React",
      description:
        "I made this portfolio to showcase my skills, my project and people will get know more about me. I made this website using React, JavaScript, Bootstrap, HTML, CSS.",
      link: "https://yashgandhi.tech/",
    },
    {
      id: 2,
      img: Mes1,
      project_name: "MESCOE Alumni Portal ",
      description:
        "We design & developed alumni website for our college. My main role in this internship is to develop web pages and handle database. We mainly use Vanilla JavaScript, HTML, Bootstrap to create alumni portal.",
      link: "http://mescoepune.org/alumni/",
    },
    {
      id: 3,
      img: Tic_Tac_Toe,
      project_name: "Tic-Tac-Toe Game",
      description:
        "Tic-Tac-Toe is our favorite game made using HTML,CSS,JS. You can play game right now if you want.",
      link: "https://yashgandhi876.github.io/tictactoe/",
    },
    {
      id: 4,
      img: Cal,
      project_name: "Calculator using React",
      description: "I made Calculator using React, JavaScript.",
      link: "https://yashgandhi876.github.io/Calculator/",
    },
    {
      id: 5,
      img: Antakshari,
      project_name: "Antakshari game with bot",
      description:
        "I made Antakshari game with bot using Python. In this game player can't win as solo. Logic behind this game is bot will remember last letter of song where player lose & then machine will throw song which start from that letter only so player have no choice. Human cann't remember that much, so it's really hard to win.",
      link: "https://github.com/yashgandhi876/Antakshri_Game_With_Bot",
    },
    {
      id: 6,
      img: Snake_Ladder,
      project_name: "Snake and Ladder Game",
      description:
        "I made this game using C as well as Python. This is simple snake and ladder game, we can play it on terminal.",
      link: "https://github.com/yashgandhi876/Snake-Ladder-Game",
    },
  ];

  checkSize() {
    try {
      if (window.outerWidth >= 768) {
        this.simple.current.classList.add("d-none");
        this.classic.current.classList.remove("d-none");
      } else if (window.outerWidth < 768) {
        this.classic.current.classList.add("d-none");
        this.simple.current.classList.remove("d-none");
      }
    } catch (e) {
      console.log(e);
    }
  }

  addHoverEffect = (card, num, event) => {
    card.current.addEventListener(event, () => {
      num.current.classList.add("on_hover");
    });
  };
  removeHoverEffect = (card, num, event) => {
    card.current.addEventListener(event, () => {
      num.current.classList.remove("on_hover");
    });
  };

  addClasses = (card, ope) => {
    if (ope === "add") card.current.classList.add("d-none");
    else if (ope === "remove") card.current.classList.remove("d-none");
  };

  componentDidMount() {
    let current = 1;

    // projectjs
    let loadData = () => {
      try {
        if (current !== 0) {
          this.prev_img.current.src = this.projects[current - 1].img;
          this.prev_pro_name.current.innerHTML = this.projects[
            current - 1
          ].project_name;
          this.prev_pro_des.current.innerHTML = this.projects[
            current - 1
          ].description;
        }

        this.now_img.current.src = this.projects[current].img;
        this.now_pro_name.current.innerHTML = this.projects[
          current
        ].project_name;
        this.now_pro_des.current.innerHTML = this.projects[current].description;
        this.project_link.current.href = this.projects[current].link;

        if (current !== 5) {
          this.next_img.current.src = this.projects[current + 1].img;
          this.next_pro_name.current.innerHTML = this.projects[
            current + 1
          ].project_name;
          this.next_pro_des.current.innerHTML = this.projects[
            current + 1
          ].description;
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
        this.addClasses(this.prev_card, "add");
        this.addClasses(this.prev_card_virtual, "remove");
        this.addClasses(this.next_card, "remove");
      } else {
        this.addClasses(this.prev_card, "remove");
        this.addClasses(this.prev_card_virtual, "add");
        this.addClasses(this.next_card, "remove");
      }
    });
    this.next_card.current.addEventListener("click", () => {
      current++;
      loadData();
      if (current === 5) {
        this.addClasses(this.prev_card, "remove");
        this.addClasses(this.prev_card_virtual, "add");
        this.addClasses(this.next_card, "add");
      } else {
        this.addClasses(this.prev_card, "remove");
        this.addClasses(this.prev_card_virtual, "add");
        this.addClasses(this.next_card, "remove");
      }
    });

    this.checkSize();

    window.addEventListener("resize", () => {
      this.checkSize();
    });

    this.addHoverEffect(this.prev_card, this.on_ho1, "mouseover");
    this.removeHoverEffect(this.prev_card, this.on_ho1, "mouseout");
    this.addHoverEffect(this.next_card, this.on_ho2, "mouseover");
    this.removeHoverEffect(this.next_card, this.on_ho2, "mouseout");
    // project
  }

  render() {
    return (
      <div className="container" id="projects">
        <div ref={this.simple} id="simple">
          
          <div>
            <br />
            <ul style={{ listStyleType: "none", padding: "0px 5px" }}>
              {this.projects.map((ele) => (
                <div>
                  <ProjectItems
                    href={ele.link}
                    link={ele.project_name}
                    par={ele.description}
                    key={ele.id}
                  />
                  <br />
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="container" ref={this.classic} id="classic">
                
          <div className="mt-5 row startPro container">
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
                  src={require("../../assets/Images/s_l.jpg")}
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
