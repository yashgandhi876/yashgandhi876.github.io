import React from "react";
import "./App.css";
import Projects from "./Projects";
import Symbols from "./Symbols";
import Links from "./Links";
import About from "./About";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Uparrow from "./Uparrow";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Uparrow />
      <Intro />
      <Projects />
      <br />
      <About />
      <br />
      <Links />
      <Symbols />
    </div>
  );
}

export default App;
