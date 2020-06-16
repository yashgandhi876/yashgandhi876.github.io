import React from "react";
import "./aboutme.css";

const AboutMe = () => {
  return (
    <div class="container mainsss">
      <div class="about">
        <h1 class="aboutme">About</h1>
      </div>
      <hr className="line" />
      <div class="name">
        <p class="namep">Hey, I'm Yash Gandhi.</p>
      </div>
      <div class="photo">
        <img
          src={require("../../assets/mmmmm.jpg")}
          alt="yash gandhi"
          width="100%"
        />
      </div>
      <div class="des">
        <h1 class="mt-2">Little More...</h1>
        <hr class="line" />
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
          I made{" "}
          <a href="#projects" target="_blank">
            Projects
          </a>{" "}
          using HTML, CSS, JavaScript and pushed on{" "}
          <a
            href="https://github.com/yashgandhi2020"
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
        <div class="skills">
          <h1 class="mt-5">Skills...</h1>
          <hr class="line" />
          <h5>Specialties:</h5>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <h5>Familiar:</h5>
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
