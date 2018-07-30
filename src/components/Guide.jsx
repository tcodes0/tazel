import React from "react";
import { $ } from "../utils/index";

const toggleGuide = () => {
  const { style } = $(".guide");

  if (style.display === "" || style.display === "none") {
    style.display = "block";
    style.height =
      window.innerHeight > document.body.offsetHeight
        ? `${window.innerHeight}px`
        : `${document.body.offsetHeight}px`;
  } else {
    style.display = "none";
  }
};

class Guide extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.keyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyDown);
  }

  keyDown = e => {
    if (e.key === "Escape") toggleGuide();
  };

  render() {
    return <div className="guide" role="presentation" />;
  }
}

export default Guide;
