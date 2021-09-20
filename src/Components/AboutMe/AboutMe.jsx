import React from "react";
import "./aboutme.css";

const AboutMe = () => {
  return (
    <div className="container mainsss">

      <div className="firstBox">

        <div class="firstPart">
          <p>
            Heyyy, how's going buddy?
          </p>
          <p>
            I am Yash Gandhi from India. I am Web Developer, frontend developer, backend developer, full stack developer, and last but not least full snack developer as well <span> 🤤😂</span>.
            I completed my Bachelor's of Engineering from <a
              href="http://mescoepune.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              MESCOE
            </a>
            , Pune. Along with degree I participated in hackthons, coding challenges,
            and yes we also won one hackthon from Airbus i.e. Airbus Aerothon 3.0 <span>🥳🥳</span>
            . Then I also participated in Global Coding Challenge by Credit Suisse in 2020
            and secured 616th rank in the world out of 18,000 participants.

          </p>
          <p>
            I crafted some cool <a href="/projects">projects</a> and pushed on{" "}
            <a
              href="https://github.com/yashgandhi876"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            .  I used to make videos based on projects, tips & tricks, JavaScript, all about
            web and I have uploaded them  on{" "}
            <a
              href="https://www.youtube.com/channel/UCyB_tsmZLM0nK2yTYF2ZaaA/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              youtube
            </a>
            . That makes my weekend very much interesting.
          </p>

          <p>
            My skillset are JavaScript, ReactJS, Java, Python, MySQL, HTML, CSS, C, C++, etc. I am good at googling 😛
          </p>

          <p>
            Want to connect with me? Just dm me on twitter, linkedin, instagram anywhere @yashgandhi876 ( not facebook you will never get reply from me on fb 😂 It's just birthday reminder for me ). Or you can mail me on yashgandhi876@gmail.com
          </p>
        </div>

        <div className="photo secondPart">
          <img
            src={require("../../assets/Images/mmmmm.jpeg")}
            alt="yash gandhi"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
