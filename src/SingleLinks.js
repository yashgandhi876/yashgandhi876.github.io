import React from "react";

const SingleLinks = ({ Label, href, name }) => {
  return (
    <div className="linkss">
      <li>
        {Label}
        <a
          href={href}
          target="_blank"
          title=" For Professional use Only "
          rel="noopener noreferrer"
        >
          {" "}
          {name}
        </a>
      </li>
    </div>
  );
};

export default SingleLinks;
