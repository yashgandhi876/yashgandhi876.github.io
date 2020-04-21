import React from "react";

const ProjectItems = ({ href, link, par }) => {
  return (
    <div className="project-item">
      <li>
        <h4>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </h4>
        <p className="ml-3">{par}</p>
      </li>
    </div>
  );
};

export default ProjectItems;
