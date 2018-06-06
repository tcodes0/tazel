import React from "react";
import ReadFtp from "../reads/SayGoodbyeToFtp";

const Reads = props => (
  <div
    {...props}
    id="reads"
    role="region"
    aria-label="All articles Thomazella wrote"
  >
    <div className="container-nontileable" role="presentation">
      <ReadFtp />
    </div>
  </div>
);

export default Reads;
