import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const ProfessionalDescription = props => (
  <div
    role="region"
    id="professional-description"
    aria-label="Quick description of Thomazella as a professional"
    {...props}
  >
    <LanguageSwitcher />
    <h2>
      Hi there!
      <br /> I work building websites and I love it. I care about the people
      using my work and I strive to make it better. This is my homepage, feel
      free to play with my stuff.
    </h2>
  </div>
);

export default ProfessionalDescription;
