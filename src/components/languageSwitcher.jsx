import React from "react";
import flagBrazil from "../img/flag-brazil.svg";
import flagAmerica from "../img/flag-america.svg";
import ImgSvg from "./ImgSvg";

const LanguageSwitcher = props => (
  <div className="language-switch hide" role="menu" {...props}>
    <button
      type="button"
      name="choose-english"
      className="active"
      title="Read in English"
    >
      <ImgSvg height={30} src={flagAmerica} alt="a flag of America" />
    </button>
    <button type="button" name="choose-portuguese" title="Read in Portuguese">
      <ImgSvg height={30} src={flagBrazil} alt="a flag of Brazil" />
    </button>
  </div>
);

export default LanguageSwitcher;
