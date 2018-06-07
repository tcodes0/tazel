import React from "react";
import CloseLink from "../components/CloseLink";
import ImgSvgContained from "../components/ImgSvgContained";
import home from "./newTazel/home.svg";
import about from "./newTazel/about.svg";
import boogaloo from "./newTazel/boogaloo.svg";
import projects from "./newTazel/projects.svg";
import read from "./newTazel/read.svg";
import roboto from "./newTazel/roboto.svg";
import thomazellaBoogaloo from "./newTazel/thomazella-boogaloo.svg";
import thomazellaRoboto from "./newTazel/thomazella-roboto.svg";
import paper from "./newTazel/paper.jpg";
import id from "./newTazel/id.jpg";
import ie from "./newTazel/ie.png";
import safari from "./newTazel/safari.png";
import thomazella from "../img/thomazella.svg";
import Backlinks from "../components/Backlinks";

const NewTazel = props => (
  <div
    {...props}
    id="new-tazel"
    className="project"
    role="article"
    aria-label="new-tazel"
  >
    <div className="project-background" role="presentation">
      <div className="project-header">
        <span className="span-date" role="note">
          February 2018
        </span>
        <CloseLink />
      </div>
      <div className="project-text">
        <h1 className="heading1">Making this site</h1>
        <h2>layout</h2>
        <p>
          It started out as a place for my work and my thoughts. From the
          beginning I wanted to{" "}
          <strong>
            strike a good balance between the different and the usual
          </strong>, the playful and the serious. Meanwhile keeping it simple
          and minimal.
        </p>
        <em>
          Objective landing page describing me and my work quickly. It links to
          all other pages and to my social media.
        </em>
        <ImgSvgContained
          height="500"
          alt="wireframe sketch of a page"
          src={home}
        />
        <em>
          A gallery of projects built around a simple preview and project
          brands.
        </em>
        <ImgSvgContained
          height="500"
          alt="wireframe sketch of a page"
          src={projects}
        />
        <em>
          Articles (because writing is thinking) follow the same preview idea
          with maximum legibility.
        </em>
        <ImgSvgContained
          height="500"
          alt="wireframe sketch of a page"
          src={read}
        />
        <em>
          A page about me and my work. Made to be clean and informative in a
          personal manner.
        </em>
        <ImgSvgContained
          height="500"
          alt="wireframe sketch of a page"
          src={about}
        />
        <p>
          Important references were
          <a className="other-site" href="https://v5.tylergaw.com">
            Tyler Gaw{" "}
          </a>
          and
          <a className="other-site" href="https://fictivekin.com">
            Fictive Kin
          </a>. The first was very objective and personal. The second was
          professional and playful. I used paper as a starting point for my
          layouts, so I could try any idea and experiment.
        </p>
        <em>Initial sketches on paper.</em>
        <ImgSvgContained
          className="screenshot"
          src={paper}
          alt="sheets of paper with site drawings"
        />
        <em>Indesign was used for creative arrangements of images and text.</em>
        <ImgSvgContained
          className="screenshot"
          src={id}
          alt="a site plan inside layout software"
        />
        <h2>99% of devices accounted for</h2>
        <p>
          Built with progressive enhancement in mind, this site is fully
          functional without javascript. In fact, javascript only makes it
          prettier. It features responsive design for all screens, and is usable
          by a blind person. Thanks to careful engineering, it looks great both
          on Internet Explorer 8 and the latest browsers.
        </p>
        <ImgSvgContained
          src={ie}
          alt="a picture of the Internet explorer browser"
        />
        <ImgSvgContained src={safari} alt="a picture of the Safari browser" />
        <h2>typography</h2>
        <h3 className="heading3">thomazella</h3>
        <p>
          My brand-name is another attempt to find a good compromise between
          personal warmth and professional competence. It's crafted as a blend
          between two very different typographic families, Roboto and Boogaloo.
        </p>
        <ImgSvgContained
          src={roboto}
          height="200"
          alt="Roboto Bold typography"
        />
        <ImgSvgContained
          src={thomazellaRoboto}
          height="75"
          alt="Thomazella's logo with roboto"
        />
        <ImgSvgContained
          src={boogaloo}
          height="200"
          alt="Boogaloo typography"
        />
        <ImgSvgContained
          src={thomazellaBoogaloo}
          height="75"
          alt="Thomazella's logo with boogaloo"
        />
        <em>Present version</em>
        <ImgSvgContained src={thomazella} height="75" alt="Thomazella's logo" />
        <div
          className="container-image"
          aria-label="Thomazella's logo"
          role="img"
        />
        <h3 className="heading3">Titles and Paragraphs</h3>
        <p>
          The letter for titles is a monospaced font to bring a little of the
          aesthetic of coding. For text, a font that reflects how I treat
          people, not like a robot.
        </p>
        <div className="letter-example">
          <h3>ROBOTO MONO, because sites are made of code</h3>
          <p>
            Source Sans Pro, a font that is readable, modern but not cold. I
            associate very geometric sans-serifs with a cold, distant way of
            communicating. When you visit my site, I would like you to
            understand me as a person and professional, and that includes how I
            see you. Notice that this letter is detailed. Details remind me of
            people, because no two people are the same. The commas remind any
            Futura's commas that they are but crude blocks. The small L is not
            squeezed into a rectangle, it has a little foot. The small G looks
            fabulous. I am considerate, and treat others well always, so I chose
            this font to make you see that.
          </p>
        </div>
        <h2>Colors & more</h2>
        <p>
          Colors revolve around a standard light background and a warm hue, with
          a few tints and shades. Everything was kept simple on purpose.
        </p>
        <div className="align-center">
          <div className="pallete" />
          <div className="pallete" />
          <div className="pallete" />
          <div className="pallete" />
        </div>
        <p>
          It's easier to add than it is to remove. It's better to have a solid
          foundation to build over. This site will likely grow and develop
          organically looking ever more fleshed out and interesting. I am
          specially interested in making it interactive in some fun ways, or
          trying really new, exciting layouts. Filling all this white space with
          something unexpected.
        </p>
      </div>
      <Backlinks />
    </div>
    <hr />
  </div>
);

export default NewTazel;
