import React from "react";
import logo from "../img/thomazella.svg";
import ImgSvg from "./ImgSvg";
import Navigation from "./Navigation";

const HeaderFancy = props => (
  <div {...props} className="header-fancy" role="banner" id="header">
    <div className="container" role="presentation">
      <div
        className="thomazella-logo"
        aria-label="Thomazella's logo"
        role="img"
      >
        <ImgSvg
          src={logo}
          height="75"
          alt="Thomazella written in custom typography."
        />
      </div>

      <h1 id="professional-title" aria-describedby="professional-description">
        Designer + JavaScript_Developer
      </h1>

      <Navigation className="nav-fancy" />
    </div>
  </div>
);

export default HeaderFancy;
