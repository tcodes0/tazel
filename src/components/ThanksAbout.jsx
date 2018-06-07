import React from "react";
import cartoon from "../img/pic-cartoon.png";

const ThanksAbout = props => (
  <div className="thanks-for-reading" role="note" {...props}>
    <div className="container">
      <em>Thanks for the visit.</em>

      <div className="container-thomazella-pic">
        <div className="img-svg" height="200" id="pic-cartoon">
          <img src={cartoon} alt="drawing of thomazella smiling" />
        </div>
      </div>
    </div>
  </div>
);

export default ThanksAbout;
