import React from "react";
import Navigation from "./Navigation";
import SocialMediaLinks from "./SocialMediaLinks";
import { $, $$ } from "../utils/index";

const placeFooterOnBottom = () => {
  const f = $(".footer") || $(".footer-home");

  if (f.offsetHeight + f.offsetTop < window.innerHeight) {
    f.style.position = "relative";
    f.style.bottom = `${-1 *
      (window.innerHeight - f.offsetHeight - f.offsetTop)}px`;
  }
};

class Footer extends React.Component {
  componentDidMount() {
    placeFooterOnBottom();
  }

  render() {
    return (
      <div className="footer" role="contentinfo" {...this.props}>
        {this.props.className !== "footer-home" && (
          <Navigation className="nav-footer" />
        )}
        <SocialMediaLinks />
      </div>
    );
  }
}

export default Footer;
