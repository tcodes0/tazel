import React from "react";
import ReadFtp from "../reads/SayGoodbyeToFtp";
import ReadPwned from "../reads/Pwned";
// import onLoaders from "../utils/index";

class Reads extends React.Component {
  componentDidMount() {
    document.title = "Thomazella's articles";
    // onLoaders.forEach(onLoader => {
    //   onLoader();
    // });
  }

  render() {
    return (
      <div
        {...this.props}
        id="reads"
        role="region"
        aria-label="All articles Thomazella wrote"
        className="hide"
      >
        <div className="container-nontileable" role="presentation">
          <ReadFtp />
          <ReadPwned />
        </div>
      </div>
    );
  }
}

export default Reads;
