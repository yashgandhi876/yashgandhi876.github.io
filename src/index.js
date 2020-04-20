import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import wlogo from "./img/wlogo.png";
import Sign from "./img/Sign.png";

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
