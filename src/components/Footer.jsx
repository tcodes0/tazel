import React from "react";
import Navigation from "./Navigation";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = props => (
  <div className="footer" role="contentinfo" {...props}>
    {props.className !== "footer-home" && <Navigation className="nav-footer" />}
    <SocialMediaLinks />
  </div>
);

export default Footer;
