import React from "react";

const ProjectItems = ({ href, link, par }) => {
  return (
    <div className="project-item">
      <li>
        <h4>
          <a
            href="http://mescoepune.org/alumni/"
            target="_blank"
            rel="noopener noreferrer"
          >
            College Alumni Portal
          </a>
        </h4>
        <p className="ml-3">
          It's team project, our college gave us an opportunity to work on live
          project from scratch. We used latest technology like HTML5, CSS3,
          BootStrap4 and Vanilla JavaScript ( ES6+ ) to create website.
        </p>
      </li>
    </div>
  );
};

export default ProjectItems;
