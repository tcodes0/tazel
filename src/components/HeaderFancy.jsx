import React from "react";
import logo from "../img/thomazella.svg";

const HeaderFancy = props => (
  <div {...props} className="header-fancy" role="banner" id="header">
    <div className="container" role="presentation">
      <div
        className="thomazella-logo"
        aria-label="Thomazella's logo"
        role="img"
      >
        <svg width="100%" height="75">
          <img
            src={logo}
            onError="this.src='css/img/thomazella.png'"
            width="100%"
            height="100%"
            aria-labelledby="professional-title"
            alt="Thomazella written in custom typography."
          />
        </svg>
      </div>

      <h1 id="professional-title" aria-describedby="professional-description">
        Designer + JavaScript_Developer
      </h1>

      <div className="nav-fancy" role="navigation">
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
  </div>
);

export default HeaderFancy;
