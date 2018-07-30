import React from "react";
import Backlinks from "../components/Backlinks";
import CloseLink from "../components/CloseLink";
import console from "./nununu/console.jpg";
import led from "./nununu/led.jpg";
import led2 from "./nununu/led2.jpg";
import light from "./nununu/light.jpg";
import logoWhite from "./nununu/logo-white.png";
import logo from "./nununu/logo.png";
import setup from "./nununu/setup.jpg";
import user from "./nununu/user.jpg";
import ImgContained from "../components/ImgContained";
import { $$ } from "../utils/index";

const colorLinks = (color = "#ffbc0f") => {
  const targets = [...$$("#nununu a.close .img-svg")];
  targets.push(...$$("#nununu a.back .img-svg"));
  targets.forEach(t => (t.style.backgroundColor = color));
};

class Nununu extends React.Component {
  componentDidMount() {
    colorLinks();
  }

  render() {
    return (
      <div id="nununu" className="project" role="article" aria-label="nununu">
        <div className="project-background" role="presentation">
          <div className="project-header">
            <span className="span-date" role="note">
              December 2016
            </span>
            <CloseLink />
          </div>
          <div className="project-text">
            <p>
              The installation is made of a dark room with 4 speakers, each with
              a LED and a light sensor.
            </p>
            <ImgContained src={led} alt="Instalation LED in darkness" />
            <p>
              The room is always dark, but some lights can be seen, and music
              heard.
            </p>
            <ImgContained src={led2} alt="Instalation LED in darkness #2" />
            <p>When a person shines a light on a speaker...</p>
            <ImgContained
              src={light}
              alt="Person with cellphone light on speaker"
            />
            <p>The LED and the music respond.</p>
            <ImgContained
              className="portrait"
              src={user}
              alt="Person with cellphone light on speaker #2"
            />
            <p>The software, written in Pure Data.</p>
            <ImgContained src={console} alt="Software console" />
            <ul>
              <li>Arduino to hook sensors and LEDs.</li>
              <li>Audio interface with 4 channel output.</li>
              <li>Amplifiers for the passive speakers.</li>
              <li>Computer, the brain.</li>
            </ul>
            <ImgContained
              src={setup}
              alt="Table with computer, amplifiers and arduino"
            />
            <div className="container-image">
              <iframe
                width="100%"
                height="360"
                src="https://www.youtube.com/embed/R3qf1qaqefA"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="nununu video 1"
              />
            </div>
            <div className="container-image">
              <iframe
                width="100%"
                height="360"
                src="https://www.youtube.com/embed/m5sx70AJFOA"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                title="nununu video 2"
                allowFullScreen
              />
            </div>
            <div className="container-image">
              <iframe
                width="100%"
                height="360"
                src="https://www.youtube.com/embed/LFe7g9mX3dY"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                title="nununu video 3"
                allowFullScreen
              />
            </div>
            <p>
              Nununu came about from my desire to work with something
              experimental using technology and music related for my senior
              college project. I used Pure Data for the software that played
              music and coordinated light and sound effects. Sensors and LEDs
              were wired into an Arduino board, and audio hardware used was a 4
              channel interface. Nununu featured four soundscapes with different
              moods and interactions. I produced a document of the whole
              process, which you can{" "}
              <a
                style={{ color: "white" }}
                href="https://drive.google.com/open?id=1e_Gsdf3ky5hncVHw4XGvaeJjSSOwBP2o"
              >
                download
              </a>
              , if you’re into that type of thing.
            </p>
            <p>I also worked on branding the project:</p>
            <ImgContained src={logo} alt="Nununu brand logo dark" />
            <ul>
              <li>Manifestation</li>
              <li>Music</li>
              <li>Contact</li>
              <li>Rhythm</li>
              <li>Playfulness</li>
            </ul>
            <ImgContained src={logoWhite} alt="Nununu brand logo light" />
          </div>
          <Backlinks />
          <hr />
        </div>
      </div>
    );
  }
}

export default Nununu;
