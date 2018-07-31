import React from "react";

class ReadPreviews extends React.Component {
  componentDidMount() {
    // reafactor: add componentDidUnmount and clean the listeners
    // addFloatingHandlerToLink(".read-preview a");
  }

  render() {
    return (
      <div
        id="read-previews"
        role="region"
        aria-label="Previews of all articles Thomazella wrote"
      >
        <div className="container-tileable" role="presentation">
          <div className="read-preview" role="article">
            <span className="span-date" role="note">
              April 2018
            </span>
            <a href="#pwned">
              <h1 className="heading1">
                <span>';--Pwned?</span>
              </h1>
            </a>
            <a href="#pwned">
              <p>
                I didnt find about <strong>haveibeenpwned.com</strong> until a
                few weeks ago, and guess what? PWNED. Then I spent the afternoon
                on wikipedia learning more about security.
              </p>
            </a>
            <hr />
          </div>
        </div>
        <div className="container-tileable" role="presentation">
          <div className="read-preview" role="article">
            <span className="span-date" role="note">
              March 2018
            </span>
            <a href="#say-goodbye-to-ftp">
              <h1 className="heading1">
                <span>Say goodbye to FTP</span>
              </h1>
            </a>
            <a href="#say-goodbye-to-ftp">
              <p>
                We all used FTP to upload our sites at some point. Nowadays,
                though, I moved to using rsync and SSH keys, because it's much
                faster. Rsync is a really good file transfer program and SSH is
                a protocol for secure access to a remote computer. Using both
                together to do the FTP work can save a ton of time, typing and
                clicking, so I wrote this intro to setting it up.
              </p>
            </a>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default ReadPreviews;
