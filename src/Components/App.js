import React, { Component } from "react";
import "./App.css";
import Projects from "./Projects/Projects";
import Symbols from "./Symbols/Symbols";
import Navbar from "./Navbar/Navbar";
import Uparrow from "./Uparrow/Uparrow";
import AboutMe from "./AboutMe/AboutMe";
import Blogs from "./Blogs/Blogs";
import Home from "./Home/Home";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Navbar />
          <Uparrow />
          <Route path="/" exact component={Home} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/projects" component={Projects} />
          <Route path="/aboutme" component={AboutMe} />
          <Symbols />
        </div>
      </Router>
    );
  }
}

export default App;
