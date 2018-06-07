import React from "react";
import facebookLogo from "../img/facebook.svg";
import githubLogo from "../img/github.svg";
import linkedinLogo from "../img/linkedin.svg";
import ImgSvg from "./ImgSvg";

const SocialMediaLinks = props => (
  <ul className="social-media-links" aria-label="Social media links" {...props}>
    <li>
      <a
        href="https://facebook.com/thomazell"
        title="Find Thomazella on facebook"
      >
        <ImgSvg height="50" src={facebookLogo} alt="facebook logo" />
      </a>
    </li>
    <li>
      <a href="https://github.com/Thomazella" title="Find Thomazella on github">
        <ImgSvg height="50" src={githubLogo} alt="github logo" />
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/thomazella/"
        title="Find Thomazella on linkedIn"
      >
        <ImgSvg height="50" src={linkedinLogo} alt="linkedin logo" />
      </a>
    </li>
  </ul>
);

export default SocialMediaLinks;
