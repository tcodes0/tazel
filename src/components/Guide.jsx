import React from "react";

const toggleGuide = () => {
  const guide = $(".guide");
  if (guide.style.display === "" || guide.style.display === "none") {
    guide.style.display = "block";
    if (window.innerHeight > document.body.offsetHeight) {
      guide.style.height = `${window.innerHeight}px`;
    } else {
      guide.style.height = `${document.body.offsetHeight}px`;
    }
  } else {
    guide.style.display = "none";
  }
};

class Guide extends React.Component {
  keyDown = e => {
    console.log(e);
  };

  render() {
    return (
      <div className="guide" role="presentation" onKeyDown={this.keyDown} />
    );
  }
}

export default Guide;
