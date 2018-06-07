import React from "react";
import Navigation from "./Navigation";

const Header = ({ staticContext, props }) => (
  <div role="banner" id="header" className="header" {...props}>
    <Navigation />
  </div>
);

export default Header;
