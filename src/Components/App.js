import React, { Component } from "react";
import "./App.css";
import Projects from "./Projects";
import Symbols from "./Symbols";
import Links from "./Links";
import Navbar from "./Navbar";
import Uparrow from "./Uparrow";
import AboutMe from "./AboutMe";
import Blogs from "./Blogs";
import Home from "./Home";

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
          <Links />
          <Symbols />
        </div>
      </Router>
    );
  }
}

export default App;
