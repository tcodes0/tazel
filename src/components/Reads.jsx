import React from "react";
import ReadFtp from "../reads/SayGoodbyeToFtp";
import ReadPwned from "../reads/Pwned";

const Reads = props => (
  <div
    {...props}
    id="reads"
    role="region"
    aria-label="All articles Thomazella wrote"
  >
    <div className="container-nontileable" role="presentation">
      <ReadFtp />
      <ReadPwned />
    </div>
  </div>
);

export default Reads;
