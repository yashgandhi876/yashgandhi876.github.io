import React from "react";

const SingleLinks = ({ Label, href, name, title }) => {
  return (
    <div className="linkss">
      <li>
        {Label}
        <a href={href} target="_blank" title={title} rel="noopener noreferrer">
          {" "}
          {name}
        </a>
      </li>
    </div>
  );
};

export default SingleLinks;
