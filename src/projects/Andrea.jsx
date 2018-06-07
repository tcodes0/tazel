import React from "react";
import Backlinks from "../components/Backlinks";
import CloseLink from "../components/CloseLink";
import ImgContained from "../components/ImgContained";
import assinatura from "./andrea/assinatura.png";
import bird from "./andrea/bird.jpg";
import footer from "./andrea/footer.jpg";
import logo from "./andrea/andrea-logo.png";
import sky from "./andrea/sky.jpg";

const Andrea = props => (
  <div
    {...props}
    id="andrea"
    className="project"
    role="article"
    aria-label="andrea"
  >
    <div className="project-background" role="presentation">
      <div className="project-header">
        <span className="span-date" role="note">
          September 2016
        </span>
        <CloseLink />
      </div>
      <div className="project-text">
        <div className="yellow" />
        <div className="container-image no-margin">
          <img alt="Andrea&#39;s signature" src={assinatura} />
        </div>
        <div className="ash" />
        <p>
          <a className="other-site" href="http://www.andreathomazella.com">
            andreathomazella.com
          </a>
        </p>
        <ImgContained alt="Painting: a bird close to a tree" src={bird} />
        <div className="gray">
          <p>
            The site is very minimal and simple, trying to leave as much room as
            possible to the artwork. A great deal of emphasis went into making
            something that looked professional and personal at the same time.
            Using the artist’s handwriting helps accomplish that, besides making
            the visitor feel welcomed.
          </p>
        </div>
        <ImgContained alt="Painting: birds in the sky" src={sky} />
        <div className="gray">
          <p>
            We decided to show photos of her workplace in the footer, to help
            create a sense of proximity.
          </p>
        </div>
        <div className="container-image bg-gray no-margin">
          <img alt="Art tools and pencils on a table" src={footer} />
        </div>
        <div className="yellow">
          <p>
            The photo used as header for the homepage is actually a self
            portrait, but an abstract one. Because that was unique, it was
            chosen as a work to derive a color palette from, to be used across
            the site. Transitions and transparencies were a finishing touch used
            to convey a polished experience.
          </p>
          <div className="align-center">
            <div className="pallete bg-yellow border-ash" />
            <div className="pallete bg-ash" />
            <div className="pallete bg-gray" />
          </div>
        </div>
        <div className="ash short" />
        <div className="ash">
          <div className="container-image half-img">
            <img alt="Art tools and pencils on a table" src={logo} />
          </div>
          <p>
            I worked with other colleagues in college during the design and
            wireframe phase of the project, but the current implementation is
            just me. I work maintaining the project since. @leticia brand, @nina
            grillo, @camila holanda, have you guys seen this new version?
          </p>
          <a className="other-site" href="http://www.andreathomazella.com">
            andreathomazella.com
          </a>
        </div>
      </div>
      <Backlinks />
      <hr />
    </div>
  </div>
);

export default Andrea;
