import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import wlogo from "./img/wlogo.png";
import Sign from "./img/Sign.png";
import Cal from "./img/Cal.jpg";
import Mes1 from "./img/mes1.jpg";
import Antakshari from "./img/antakshari.jpg";
import Snake_Ladder from "./img/s_l.jpg";
import Tic_Tac_Toe from "./img/tic_tac_toe.jpg";
import Portfolio from "./img/portfolio.jpg";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();

const btn1 = document.querySelector(`#btn1`);
const btn2 = document.querySelector(`#btn2`);
const icon = document.querySelector(`.mn`);
const nav = document.querySelector(`#nav2`);
const body = document.body.classList;
const upi = document.querySelector(`#upicon`);
const upar = document.querySelector("#upar");
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
const on_ho1 = document.querySelector("#on_ho1");
const on_ho2 = document.querySelector("#on_ho2");
const project_link = document.querySelector("#project_link");
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
      "Tic-Tac-Toe is our favorite game made using HTML,CSS,JS. You can play game right now if you want 😁",
    link: "https://yashgandhi2020.github.io/Tic-Tac_Toe/",
  },
];

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
const loadData = () => {
  try {
    if (current !== 0) {
      prev_img.src = projects[current - 1].img;
      prev_pro_name.innerHTML = projects[current - 1].project_name;
      prev_pro_des.innerHTML = projects[current - 1].description;
    }

    now_img.src = projects[current].img;
    now_pro_name.innerHTML = projects[current].project_name;
    now_pro_des.innerHTML = projects[current].description;
    project_link.href = projects[current].link;

    if (current !== 5) {
      next_img.src = projects[current + 1].img;
      next_pro_name.innerHTML = projects[current + 1].project_name;
      next_pro_des.innerHTML = projects[current + 1].description;
    }
  } catch (e) {
    console.error(e);
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

prev_card.addEventListener("mouseover", () => {
  on_ho1.classList.add("on_hover");
});
next_card.addEventListener("mouseover", () => {
  on_ho2.classList.add("on_hover");
});
prev_card.addEventListener("mouseout", () => {
  on_ho1.classList.remove("on_hover");
});
next_card.addEventListener("mouseout", () => {
  on_ho2.classList.remove("on_hover");
});
