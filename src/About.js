import React from "react";

const About = () => {
  return (
    <div className="container" id="About">
      <div className="container">
        <h3>About</h3>
        <br />
        <div className="container">
          <p className="ml-5">
            Hey there, I'm Yash Gandhi, I am pursuing a Bachelor of Engineering
            in Computer Science degree from
            <a
              href="http://www.mescoepune.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              MESCOE{" "}
            </a>
            pune. At the very beginning I don't even know what is programming,
            who are the coders. <br />
            <br />
            In second year of first half-term, I learnt C language. then I
            learnt many core-things like Data Structure, Algorithms, OOP
            concepts, C++ etc. My siblings are Full Stack Developer, so they
            always helps me while learning HTML5, CSS3, JavaScript.
          </p>
          <p className="ml-5">
            After half-term, I learn JAVA ( due to university syllabus but I
            like it's speed{" "}
            <span role="img" aria-label="awesome">
              🤩
            </span>{" "}
            ) and Python ( Popular language ) I like python too. Concurrently
            I'm making some web pages ( as i
            <span role="img" aria-label="love">
              💖
            </span>{" "}
            web ) then I learn CSS, Bootstrap and JavaScript.
          </p>
          <p className="ml-5">
            Now in third year, I got opportunity to work on live project from
            scratch i.e. alumni portal website, because of this project I learn
            many things of javascript, database ( we used firebase ). and now I
            started learning react, let's see how my journey goes{" "}
            <span role="img" aria-label="smile">
              🙂
            </span>
          </p>
        </div>
      </div>
      <hr className="ununs underline" />
    </div>
  );
};

export default About;
