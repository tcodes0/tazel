import React from "react";

const Navigation = props => (
  <div role="banner" id="header" className="header" {...props}>
    <div className="nav" role="navigation">
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="projects.html">Projects</a>
        </li>
        <li>
          <a href="articles.html">Read</a>
        </li>
        <li>
          <a href="about.html">About.me</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Navigation;
