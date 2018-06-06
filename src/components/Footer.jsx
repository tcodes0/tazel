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
          <a href="projects.html">
            Projects
            <br className="linebreak-for-mobile-nav" role="presentation" />
          </a>
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
            <svg width="100%" height="50" role="presentation">
              <img
                src={facebookLogo}
                onError="this.src='css/img/facebook.png'"
                width="100%"
                height="100%"
                alt="facebook logo"
              />
            </svg>
          </div>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/Thomazella"
          title="Find Thomazella on github"
        >
          <div className="img-svg">
            <svg width="100%" height="50" role="presentation">
              <img
                src={githubLogo}
                onError="this.src='css/img/github.png'"
                width="100%"
                height="100%"
                alt="github logo"
              />
            </svg>
          </div>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/thomazella/"
          title="Find Thomazella on linkedIn"
        >
          <div className="img-svg">
            <svg width="100%" height="50" role="presentation">
              <img
                src={linkedinLogo}
                onError="this.src='css/img/linkedin.png'"
                width="100%"
                height="100%"
                alt="linkedin logo"
              />
            </svg>
          </div>
        </a>
      </li>
    </ul>
  </div>
);

export default Footer;
