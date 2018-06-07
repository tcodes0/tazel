import React from "react";
import Backlinks from "../components/Backlinks";
import CloseLink from "../components/CloseLink";
import clockan from "./javascript30/clockan.jpg";
import nanopp from "./javascript30/nanopp.jpg";
import search from "./javascript30/search.jpg";

const Javascript30 = props => (
  <div
    id="javascript30"
    className="project"
    role="article"
    aria-label="javascript30"
    {...props}
  >
    <div className="project-background" role="presentation">
      <div className="project-header">
        <span className="span-date" role="note">
          November 2017
        </span>
        <CloseLink />
      </div>
      <div className="project-text">
        <h1 className="heading1">
          Building 30 things<br />in Javascript
        </h1>
        <a className="other-site" href="https://javascript30.com">
          Original free course
        </a>
        <h2>01 Nano++</h2>
        <div className="container-image">
          <a
            style={{ borderWidth: 0 }}
            className="other-site"
            href="http://nanopp.tazel.website"
          >
            <img
              className="screenshot"
              src={nanopp}
              alt="drumpads in a website"
            />
          </a>
        </div>
        <p>
          Javascript30 begins with a drum machine, how fun! Use the buttons to
          make some beats. Nanopp stands for "Nano plus plus." Nano is a famous
          drum machine the sounds were sampled from.
        </p>
        <a className="other-site" href="http://nanopp.tazel.website">
          Jam on it.
        </a>
        <h2>02 Clockan</h2>
        <div className="container-image">
          <a
            style={{ borderWidth: 0 }}
            className="other-site"
            href="http://clockan.tazel.website"
          >
            <img
              className="screenshot"
              src={clockan}
              alt="a clock against a space background"
            />
          </a>
        </div>
        <p>
          Just a regular clock that shows the time. Change its color, opacity,
          rotation speed and direction. Has a few bugs, but they actually add to
          the experience.
        </p>
        <p>
          Interesting short experimental project to create visually stimulating
          results using CSS custom properties. Because the values are updated in
          real time, it becomes a great way to customize anything on the page
          easily. Building the clock felt like a creative use of a technology
          made to operate on blocks. The time tracking and background movement
          is done through Javascript.
        </p>
        <a className="other-site" href="http://clockan.tazel.website">
          Play with it.
        </a>
        <h2>06 Search suggestion</h2>
        <div className="container-image">
          <a
            style={{ borderWidth: 0 }}
            className="other-site"
            href="http://search.tazel.website"
          >
            <img
              className="screenshot"
              src={search}
              alt="a colorful search field"
            />
          </a>
        </div>
        <p>
          This one was very educational. Type something to see a list of US
          cities suggested. It involves fetching data as JSON from another
          domain and processing it according to the user's input. The pretty
          look adds polish.
        </p>
        <a className="other-site" href="http://search.tazel.website">
          See it working.
        </a>
        <h2>{"${num} ${Title}"}</h2>
        <em>This spot will house a future challenge</em>
        <p>
          I've only done up to day 9, with only 3 cool enough to show here, but
          I would like to finish all 30 challenges. I consider this project a
          work in progress, so check back!
        </p>
      </div>
      <Backlinks />
      <hr />
    </div>
  </div>
);

export default Javascript30;
