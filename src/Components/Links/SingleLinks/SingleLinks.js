import React from "react";

const SingleLinks = ({ Label, href, name, title }) => {
  const style = {
    color: "black",
    backgroundColor: "rgba(163, 159, 220,0.5)",
  };
  return (
    <div className="linkss">
      <li style={{ listStyle: "none" }}>
        {Label}
        <a
          href={href}
          style={style}
          target="_blank"
          title={title}
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
