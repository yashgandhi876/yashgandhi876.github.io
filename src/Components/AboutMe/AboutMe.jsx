import React from "react";
import "./aboutme.css";

const AboutMe = () => {
  return (
    <div className="container mainsss">
      <div className="about">
        <h1 className="aboutme">About</h1>
      </div>
      <hr className="line" />
      <div className="name">
        <p className="namep">Hey, I'm Yash Gandhi.</p>
      </div>
      <div className="photo">
        <img
          src={require("../../assets/Images/mmmmm.jpg")}
          alt="yash gandhi"
          width="100%"
        />
      </div>
      <div className="des">
        {/* <h1 className="mt-2">Little More...</h1>
        <hr className="line" /> */}
        <p>
          I'm software engineer from Pune, IN. I was born in 2000 and grew up in
          shrirampur. I started programming for about 3 years ago. After
          graduating from high school I started pursuing Bachelor of Engineering
          degree in Computer Science from{" "}
          <a
            href="http://mescoepune.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            MESCOE
          </a>
          .
        </p>
        <p>
          I made <a href="/projects">Projects</a> using HTML, CSS, JavaScript
          and pushed on{" "}
          <a
            href="https://github.com/yashgandhi876"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          . Right now, my focus on learning React.js, Node, Express.
        </p>
        <p>
          I started making videos based on projects, tips & tricks, JavaScript
          and posted on{" "}
          <a
            href="https://www.youtube.com/channel/UCyB_tsmZLM0nK2yTYF2ZaaA/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          .
        </p>
        <div className="skills">
          <h1 className="mt-5">Skills</h1>
          <hr className="line" />
          <h5>Frontend Technologies</h5>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
          <h5>Backend Technologies</h5>
          <ul>
            <li>Node</li>
            <li>Python</li>
            <li>C++</li>
          </ul>
          <h5>Framework and Library </h5>
          <ul>
            <li>React</li>
            <li>Express</li>
            <li>Bootstrap</li>
          </ul>
          <h5>DataBase</h5>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
          <h5>Tools and Enviorment</h5>
          <ul>
            <li>Git and Github</li>
            <li>Postman</li>
            <li>OS:Ubuntu</li>
            <li>VS Code</li>
            <li>OSS Contribution (Hacktoberfest)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
