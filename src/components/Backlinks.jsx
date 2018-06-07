import React from "react";
import { Link } from "react-router-dom";
import arrowUp from "../img/arrow-up.svg";
import arrowTwist from "../img/arrow-twist.svg";
import arrowLeft from "../img/arrow-left.svg";

const Backlinks = props => (
  <div {...props} className="container-backlinks">
    <a href="#header" className="back" title="back to top">
      <div className="img-svg">
        <img src={arrowUp} width="100%" height="14" alt="" />
      </div>
      <span>Back to top</span>
    </a>
    <a href="#reads" className="back" title="read again">
      <div className="img-svg">
        <img src={arrowTwist} width="100%" height="12" alt="" />
      </div>
      <span>Read again</span>
    </a>
    <Link to="/" className="back" title="back home">
      <div className="img-svg">
        <img src={arrowLeft} width="100%" height="12" alt="" />
      </div>
      <span>Back Home</span>
    </Link>
    <a className="back">
      <em>
        keep scrolling or click
        <br />below to close
      </em>
    </a>
  </div>
);

export default Backlinks;
