import React from "react";
import Xx from "../img/x.svg";

const CloseLink = props => (
  <a className="close" href="#header" title="back to preview browsing">
    <div className="img-svg">
      <img src={Xx} width="100%" height="13" alt="" />
    </div>
  </a>
);

export default CloseLink;
