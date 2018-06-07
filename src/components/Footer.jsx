import React from "react";
import facebookLogo from "../img/facebook.svg";
import githubLogo from "../img/github.svg";
import linkedinLogo from "../img/linkedin.svg";

const Footer = props => (
  <div className="footer" role="contentinfo" {...props}>
    <div className="nav-footer" role="navigation">
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

    <ul className="social-media-links" aria-label="Social media links">
      <li>
        <a
          href="https://facebook.com/thomazell"
          title="Find Thomazella on facebook"
        >
          <div className="img-svg">
            <img
              src={facebookLogo}
              width="100%"
              height="50"
              alt="facebook logo"
            />
          </div>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/Thomazella"
          title="Find Thomazella on github"
        >
          <div className="img-svg">
            <img
              src={githubLogo}
              width="100%"
              height="50"
              alt="github logo"
            />
          </div>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/thomazella/"
          title="Find Thomazella on linkedIn"
        >
          <div className="img-svg">
            <img
              src={linkedinLogo}
              width="100%"
              height="50"
              alt="linkedin logo"
            />
          </div>
        </a>
      </li>
    </ul>
  </div>
);

export default Footer;
