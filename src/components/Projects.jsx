import React from "react";
import NewTazel from "../projects/NewTazel";
import Javascript30 from "../projects/Javascript30";
import Nununu from "../projects/Nununu";
import Andrea from "../projects/Andrea";

const Projects = props => (
  <div
    {...props}
    id="projects"
    role="region"
    aria-label="All projects Thomazella has worked on"
    className="hide"
  >
    <div className="container-nontileable" role="presentation">
      <NewTazel />
      <Javascript30 />
      <Nununu />
      <Andrea />
    </div>
  </div>
);

export default Projects;
