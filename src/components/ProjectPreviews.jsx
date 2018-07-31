import React from "react";
import ImgSvg from "../components/ImgSvg";
import logo from "../img/thomazella.svg";
import js30 from "../projects/javascript30/logo.svg";
import nununuWhite from "../projects/nununu/logo-white.png";

class ProjectPreviews extends React.Component {
  componentDidMount() {
    // reafactor: add componentDidUnmount and clean the listeners
    // addFloatingHandlerToLink(".project-preview a");
  }

  render() {
    return (
      <div
        id="project-previews"
        role="region"
        aria-label="Previews of all projects Thomazella has worked on"
        {...this.props}
      >
        <div className="container-project-previews" role="presentation">
          <div
            id="new-tazel-preview"
            className="project-preview"
            role="article"
          >
            <a href="#new-tazel">
              <div
                className="container-project-logo"
                id="logo-new-tazel"
                role="img"
                aria-label="new-tazel logo"
              >
                <ImgSvg
                  height="55"
                  src={logo}
                  alt="Thomazella written in custom typography."
                />
              </div>
            </a>
            <span className="span-date" role="note">
              February 2018
            </span>
            <a href="#new-tazel">
              <h1 className="heading1">
                <span>Homepage design and implementation</span>
              </h1>
            </a>
            <a href="#new-tazel">
              <p>
                I decided I needed my own website to show my work and have more
                creative freedom to present myself. It was designed initially on
                paper and implemented from scratch. My biggest project yet, it
                worked its way up the web stack to the site you currently
                browse. This project allowed me to grow tremendously as a
                professional.
              </p>
            </a>
          </div>
          <div
            id="javascript30-preview"
            className="project-preview"
            role="article"
          >
            <a href="#javascript30">
              <div
                className="container-project-logo"
                id="logo-javascript30"
                role="img"
                aria-label="javascript30 logo"
              >
                <ImgSvg
                  height="55"
                  src={js30}
                  alt="javscript 30 in styled letters"
                />
              </div>
            </a>
            <span className="span-date" role="note">
              November 2017
            </span>
            <a href="#javascript30">
              <h1 className="heading1">
                <span>A collection of short projects</span>
              </h1>
            </a>
            <a href="#javascript30">
              <p>
                Popular video course from Wes, it finds adepts among new devs,
                like myself, and seasoned ones interested in relying less on
                libraries. It proposes you make 30 things using just javascript.
                The cool small things I made are linked here.
              </p>
            </a>
            <p className="large-lines">
              <a
                className="other-site-small"
                href="http://nanopp.tazel.website"
              >
                Nanopp
              </a>
              <br />
              <a
                className="other-site-small"
                href="http://clockan.tazel.website"
              >
                Clockan
              </a>
              <br />
              <a
                className="other-site-small"
                href="http://search.tazel.website"
              >
                Search suggestions
              </a>
            </p>
          </div>
          <div id="andrea-preview" className="project-preview" role="article">
            <a href="#andrea">
              <div
                className="container-project-logo"
                id="logo-andrea"
                role="img"
                aria-label="andrea logo"
              >
                <div />
              </div>
            </a>
            <span className="span-date" role="note">
              September 2016
            </span>
            <a href="#andrea">
              <h1 className="heading1">
                <span>My mom's online portfolio</span>
              </h1>
            </a>
            <a href="#andrea">
              <p>
                Artists often need a way to show their work to the world, so I
                made a site to house her stuff. This was actually the first site
                I built.
              </p>
            </a>
            <a
              className="other-site-small"
              href="http://www.andreathomazella.com"
            >
              andreathomazella.com
            </a>
          </div>
          <div id="nununu-preview" className="project-preview" role="article">
            <a href="#nununu">
              <div
                className="container-project-logo"
                id="logo-nununu"
                role="img"
                aria-label="nununu logo"
              >
                <div className="container-white">
                  <img src={nununuWhite} alt="nununu logo white" />
                </div>
              </div>
            </a>
            <span className="span-date" role="note">
              December 2016
            </span>
            <a href="#nununu">
              <h1 className="heading1">
                <span>
                  Experimental installation about music and exploration
                </span>
              </h1>
            </a>
            <a href="#nununu">
              <p>
                My senior project at college.<br />
                The aim was to show people a new musical experience, where
                space, sound and playfulness intertwine. Since music is normally
                lived in stereo, I used 4 sound channels to create a richer
                experience. The darkness and light sensors are in place to
                reward people that really explored and interacted with the work.
              </p>
            </a>
            <a className="other-site-small hide" hidden href="#external-site">
              http://www.tazel.website
            </a>
            <div className="container-background" />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPreviews;
