import React from "react";
import surprise from "../img/pic-surprise.png";
import pro from "../img/pic-pro.png";

const AboutText = props => (
  <div
    id="about"
    className="about"
    role="region"
    aria-label="A description of Thomazella and his work"
    {...props}
  >
    <div className="container-about" role="presentation">
      <div className="about-header">
        <h1 className="heading1">Nice you came by</h1>
      </div>

      <div className="about-text">
        <div className="what-does-tazel-mean" role="presentation">
          <h2>
            <span>I'm</span>
            <span className="with-a-box-around fade-to-background">
              Raphael
            </span>
            <span
              className="with-a-box-around"
              aria-label="A graphic showing that Tazel is a word derived from Thomazella"
            >
              T
              <span className="fade-to-background">hom</span>
              azel
              <span className="fade-to-background">la</span>
            </span>
          </h2>

          <div className="container-thomazella-pic">
            <img src={surprise} alt="thomazella casually hanging out" />
          </div>
        </div>

        <div className="who-i-am" role="article">
          <h3 className="heading3">This is what I do</h3>
          <p>
            I am a developer majored in design specialized in javaScript. My
            strength is front-end: visual elements and building user interfaces,
            but I'm curious enough to look into back-end, or anything involving
            code, really. I like to learn everything and I'll teach myself
            anything. Ideation and people are what gives coding meaning, and for
            that, I'm glad to be a designer too.
          </p>
          <p>
            As a developer, I strive to understand the internals giving
            functionality to a program. I enjoy taking my time to understand
            concepts and challenge myself to learn new languages for fun. To me
            programming is a fun, creative tool drenched in potential to create
            things. It's fulfilling to create something useful, but making the
            ideas in your head come to life (or to code?) is just incredible.
          </p>
        </div>

        <div className="what-i-do" role="article">
          <strong>
            I make digital products for anyone in the world to use. It’s
            essential to me seeing good work making people happy.
          </strong>
        </div>

        <ul className="skills">
          <li className="dev-skills">
            <h3 className="heading3">Developer Skills</h3>

            <ul>
              <li>
                <b>HTML</b>
                <br />
                <span>
                  Semantics, structure and accessibility are essential.
                </span>
              </li>
              <li>
                <b>SASS/CSS</b>
                <br />
                <span>
                  Good UI looks great and is backwards compatible with older
                  devices.
                </span>
              </li>
              <li>
                <b>Javascript ES6</b>
                <br />
                <span>
                  My main language, I use it to deliver functionality,
                  interactivity and polish. Knowing JS is more important than
                  frameworks!
                </span>
              </li>
              <li>
                <b>4 Years</b>
                <br />
                <span>Programmin'.</span>
              </li>
              <li>
                <b>React</b>
                <br />
                <span>A great framework I look forward to using often.</span>
              </li>
              <li>
                <b>LINUX</b>
                <br />
                <span>
                  I know how to use Linux and learning its principles made me a
                  better developer.
                </span>
              </li>
              <li>
                <b>SHELL</b>
                <br />
                <span>
                  I write scripts in Bash to automate things. Moving towards
                  using Ruby more.
                </span>
              </li>
              <li>
                <b>Some experience with</b>
                <br />
                <span>C++, Node.js and Ruby</span>
              </li>
            </ul>
          </li>

          <li className="design-skills">
            <h3 className="heading3">Designer Skills</h3>

            <ul>
              <li>
                <b>Photoshop, Illustrator & Indesign</b>
                <br />
                <span>
                  5 years using, essential to prototype and plan the UI.
                </span>
              </li>
              <li>
                <b>Premier, Audition & Lightroom Classic</b>
                <br />
                <span>
                  2 years using, they are the support team for photography and
                  moving pictures.
                </span>
              </li>
              <li>
                <b>Design Thinking</b>
                <br />
                <span>
                  I think solutions by understanding the people they are for.
                </span>
              </li>
              <li>
                <b>Wireframing</b>
                <br />
                <span>I think 99 posibilities, sketch 40 then code 1.</span>
              </li>
            </ul>
          </li>

          <li className="other-skills">
            <h3 className="heading3">And also</h3>

            <ul>
              <li>
                I know business modeling and a thing or two about{" "}
                <b>entrepreneurship,</b> I studied it in college. I speak{" "}
                <b>English</b> since I was 16, having lived about a year in the
                US. Strangely enough I never taught anyone. I work well in{" "}
                <b>groups</b> and I run <b>presentations</b> just fine. I
                consider myself <b>confident and rational.</b>
              </li>
            </ul>
          </li>
        </ul>

        <div className="opinions" role="article">
          <div className="container">
            <h2>Here's what I think</h2>

            <div className="container-thomazella-pic">
              <img
                src={pro}
                alt="thomazella lookin like an ''''adult'''' in a produced pic"
              />
            </div>
          </div>

          <ul>
            <li>
              <h3 className="heading3">Development</h3>

              <p>
                Making and building is the essence of a developer. I'm careful
                with what I build because I understand someone will use it. The
                goal is that someone's experience and that is what I deliver.
              </p>

              <blockquote>
                You may not test your software, but your user always will.
              </blockquote>

              <p>
                I learn the frameworks, practices and languages popular right
                now, fully aware they'll be replaced soon enough. I also invest
                on theory, methodology and on the more permanent knowledge. I'm
                motivated to make useful things and the process is so fun.
              </p>
            </li>

            <li>
              <h3 className="heading3">Design</h3>

              <p>
                Design is taking an abstract idea and planning its realization.
                It's the special first step that makes for a solid beginning.
                Just like in development, design to me is for the people. That's
                why I like front-end, because it's the first layer of contact
                with the user and must be handled skillfully. UI, Web and
                Interaction are my main guns, but I also practice UX and
                Graphical. Actually they depend on one another and sometimes
                function together.
              </p>
            </li>

            <li>
              <h3 className="heading3">People</h3>

              <p>
                I believe it's important to work with stimulating people. In
                college I worked mostly in groups and had good and bad
                experiences. I even lead sometimes. In the end I like to make
                people feel good, be that the users or my work folks.
              </p>
            </li>

            <li>
              <h3 className="heading3">Fun</h3>

              <p>
                I have a lotta fun working. Some of my hobbies include manga,
                music and games. I've been playing games since ever and I follow
                the scene closely. Who knows I won't make my first game in the
                near future?
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default AboutText;
