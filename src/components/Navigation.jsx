import React from "react";
import { Link } from "react-router-dom";

const Navigation = props => (
  <div className="nav" role="navigation" {...props}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="projects">Projects</Link>
      </li>
      <li>
        <Link to="articles">Read</Link>
      </li>
      <li>
        <Link to="about">About.me</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
