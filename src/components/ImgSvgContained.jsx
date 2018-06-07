import React from "react";
import ImgSvg from "./ImgSvg";

const ImgSvgContained = props => (
  <div className="container-image">
    <ImgSvg {...props} />
  </div>
);

export default ImgSvgContained;
