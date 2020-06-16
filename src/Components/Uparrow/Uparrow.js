import React, { Component } from "react";
import "./Uparrow.css";

class Uparrow extends Component {
  
  componentDidMount() {
    const btn2 = document.querySelector(`#btn2`);
    const upar = document.querySelector("#upar");
    const removeUpArrow = (event) => {
      if (window.pageYOffset > 172) {
        upar.classList.remove("d-none");
      } else if (window.pageYOffset <= 172) {
        upar.classList.add("d-none");
      }
    };

    btn2.addEventListener("click", () => window.scrollTo(0, 0));
    window.addEventListener("scroll", removeUpArrow);
  }

  render() {
    return (
      <div id="upar" className="uparrow d-none">
        <button id="btn2" className="uparrow upc btn11">
          <i className="fa fa-angle-double-up uparrow"></i>
        </button>
      </div>
    );
  }
}

export default Uparrow;
