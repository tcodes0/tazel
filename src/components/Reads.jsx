import React from "react";
import ReadFtp from "../reads/SayGoodbyeToFtp";
import ReadPwned from "../reads/Pwned";
// import onLoaders from "../utils/index";

class Reads extends React.Component {
  componentDidMount() {
    document.title = "Thomazella's articles";
  }

  render() {
    return (
      <div id="reads" role="region" aria-label="All articles Thomazella wrote">
        <div className="container-nontileable" role="presentation">
          <ReadFtp />
          <ReadPwned />
        </div>
      </div>
    );
  }
}

export default Reads;
