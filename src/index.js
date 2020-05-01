import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import wlogo from "./img/wlogo.png";
import Sign from "./img/Sign.png";
import Cal from "./img/Cal.png";
import Mes1 from "./img/mes1.png";
import Antakshari from "./img/antakshari.jpg";
import Snake_Ladder from "./img/s_l.jpg";
import Tic_Tac_Toe from "./img/tic_tac_toe.png";
import Portfolio from "./img/portfolio.png";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const btn1 = document.querySelector(`#btn1`);
const btn2 = document.querySelector(`#btn2`);
const icon = document.querySelector(`.mn`);
const nav = document.querySelector(`#nav2`);
const body = document.body.classList;
const upi = document.querySelector(`#upicon`);
const upar = document.querySelector("#upar");

const backgroundChanger = (event) => {
  icon.classList.toggle(`fa-moon-o`);
  icon.classList.toggle(`fa-sun-o`);
  icon.classList.contains(`fa-sun-o`)
    ? (document.getElementById("ss").src = wlogo)
    : (document.getElementById("ss").src = Sign);
  body.toggle(`after`);
  nav.classList.toggle("navbar-dark");
  nav.classList.toggle("navbar-light");
  upi.classList.toggle("upii");
};

const removeUpArrow = (event) => {
  if (window.pageYOffset > 172) {
    upar.classList.remove("d-none");
  } else if (window.pageYOffset <= 172) {
    upar.classList.add("d-none");
  }
};

btn2.addEventListener("click", () => window.scrollTo(0, 0));
btn1.addEventListener(`click`, backgroundChanger);
window.addEventListener("scroll", removeUpArrow);

// projectjs
let current = 1;

const prev_card = document.querySelector("#prev_card");
const next_card = document.querySelector("#next_card");
const prev_card_virtual = document.querySelector("#prev_card_virtual");

const prev_img = document.querySelector("#prev_img");
const now_img = document.querySelector("#now_img");
const next_img = document.querySelector("#next_img");

const prev_pro_name = document.querySelector("#prev_pro_name");
const now_pro_name = document.querySelector("#now_pro_name");
const next_pro_name = document.querySelector("#next_pro_name");

const prev_pro_des = document.querySelector("#prev_pro_des");
const now_pro_des = document.querySelector("#now_pro_des");
const next_pro_des = document.querySelector("#next_pro_des");

const simple = document.querySelector("#simple");
const classic = document.querySelector("#classic");
const project_link = document.querySelector("#project_link");
const myData = {
  projects: [
    {
      img: Cal,
      project_name: "Calculator using React",
      description:
        "I create an web application Calculator using React. It is work with full functionality of keyboard.",
      link: "https://yashgandhi2020.github.io/Calculator/",
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
      img: Portfolio,
      project_name: "PortFolio in React",
      description:
        "I create portfolio to showcase my certification, my skills all about me my all project also there. I build website in React, Bootstrap etc.",
      link: "https://yashgandhi.tech/",
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
        "Tic-Tac-Toe is our favorite game made using Python. Simple game on terminal.",
      link: "https://github.com/yashgandhi2020/Tic-tac-toe-Game",
    },
  ],
};

const loadData = async () => {
  try {
    let project = JSON.parse(JSON.stringify(myData));
    if (current !== 0) {
      prev_img.src = project.projects[current - 1].img;
      prev_pro_name.innerHTML = project.projects[current - 1].project_name;
      prev_pro_des.innerHTML = project.projects[current - 1].description;
    }

    now_img.src = project.projects[current].img;
    now_pro_name.innerHTML = project.projects[current].project_name;
    now_pro_des.innerHTML = project.projects[current].description;
    project_link.href = project.projects[current].link;

    if (current !== 5) {
      next_img.src = project.projects[current + 1].img;
      next_pro_name.innerHTML = project.projects[current + 1].project_name;
      next_pro_des.innerHTML = project.projects[current + 1].description;
    }
  } catch (e) {
    console.log(e);
  }
};

loadData();

prev_card.addEventListener("click", () => {
  current--;
  loadData();
  if (current === 0) {
    prev_card.classList.add("d-none");
    prev_card_virtual.classList.remove("d-none");
    next_card.classList.remove("d-none");
  } else {
    prev_card.classList.remove("d-none");
    prev_card_virtual.classList.add("d-none");
    next_card.classList.remove("d-none");
  }
});
next_card.addEventListener("click", () => {
  current++;
  loadData();
  if (current === 5) {
    prev_card.classList.remove("d-none");
    prev_card_virtual.classList.add("d-none");
    next_card.classList.add("d-none");
  } else {
    prev_card.classList.remove("d-none");
    prev_card_virtual.classList.add("d-none");
    next_card.classList.remove("d-none");
  }
});

if (window.outerWidth >= 768) {
  simple.classList.add("d-none");
  classic.classList.remove("d-none");
} else if (window.outerWidth < 768) {
  classic.classList.add("d-none");
  simple.classList.remove("d-none");
}

window.addEventListener("resize", () => {
  if (window.outerWidth >= 768) {
    simple.classList.add("d-none");
    classic.classList.remove("d-none");
  } else if (window.outerWidth < 768) {
    classic.classList.add("d-none");
    simple.classList.remove("d-none");
  }
});
