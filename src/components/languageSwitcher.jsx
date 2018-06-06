import React from "react";
import flagBrazil from "../img/flag-brazil.svg";
import flagAmerica from "../img/flag-america.svg";

const LanguageSwitcher = props => (
  <div className="language-switch hide" role="menu" {...props}>
    <button
      type="button"
      name="choose-english"
      className="active"
      title="Read in English"
    >
      <span className="img-svg">
        <svg width="100%" height="30" role="presentation">
          <img
            src={flagAmerica}
            onError="this.src='css/img/flag-america.png'"
            width="100%"
            height="100%"
            alt="a flag of America"
          />
        </svg>
      </span>
    </button>
    <button type="button" name="choose-portuguese" title="Read in Portuguese">
      <span className="img-svg">
        <svg width="100%" height="30" role="presentation">
          <img
            src={flagBrazil}
            onError="this.src='css/img/flag-brazil.png'"
            width="100%"
            alt="a flag of Brazil"
            height="100%"
          />
        </svg>
      </span>
    </button>
  </div>
);

export default LanguageSwitcher;
