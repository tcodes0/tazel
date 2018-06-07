import React from "react";
import Backlinks from "../components/Backlinks";
import CloseLink from "../components/CloseLink";
import screen_pwned from "./Pwned/screen_pwned.png";
import screen_keepass from "./Pwned/screen_keepass.png";

const Pwned = props => (
  <div
    {...props}
    className="read"
    role="article"
    id="pwned"
    aria-label="pwned?"
  >
    <div className="read-background" role="presentation">
      <div className="read-header">
        <span className="span-date" role="note">
          April 2018, by Thomazella
        </span>
        <CloseLink />
        <h1 className="heading1">';--Pwned?</h1>
      </div>
      <div className="read-text" role="main">
        <p>
          <span className="read-first-line">
            Password dumps are a new security problem.
          </span>
          A site trying to do the right thing about it is
          <a className="other-site" href="https://haveibeenpwned.com/">
            {" "}
            haveibeenpwned.com
          </a>. In a nutshell, a password dump happens when criminals 0wn a
          site, and post the data they obtained online, for anyone to use or
          see. This means email addresses and passwords, ip addresses,
          birthdates or any data you share with the owned site could potentially
          be leaked. It's a privacy violation fest that's for sure, but the
          biggest problem is that a collection of this information starts to
          build up online.
        </p>
        <em>My own pwnage stats</em>
        <div className="container-image">
          <img
            className="screenshot"
            src={screen_pwned}
            alt="haveibeenpwned website showing pwned stats"
          />
        </div>
        <h3>credential stuffing</h3>
        <p>
          Having such information available saves criminals a lot of time
          because they don't need to obtain it, they just have to think how to
          use it. The best way to take advantage of a password dump is to test
          the emails and passwords against as many services as possible, hoping
          to find a match. Then, log in to the account and try to make some
          money or just whack some mischief. This strategy is being called
          <a
            className="other-site"
            href="https://www.owasp.org/index.php/Credential_stuffing"
          >
            credential stuffing
          </a>, and is the driving force behind recent
          <a
            className="other-site"
            href="https://kotaku.com/whats-really-going-on-with-all-those-hacked-fortnite-ac-1823965781"
          >
            attacks
          </a>{" "}
          to Fortnite accounts. The Fortnite case is specially bad because the
          game is designed as a free to play with a straightforward approach to
          spending money on the game, with little security verification
          required.
        </p>
        <p>
          As far as I know, most passwords leaked have encryption, but the weak
          type that gets cracked quickly. Additionally, how strong your password
          is plays a role in how easy it's cracked. However, if the company
          storing client data took no measures to protect it or poor measures,
          this makes clients much more vulnerable. How client data is protected
          by the company responsible is up to them, and password dumps have
          definitely raised awareness of how bad some companies protect our
          information. Let's hope this increased awareness leads to tighter
          security.
          <h3>security habits</h3>
          <div className="column-group">
            <p>
              Searching an email on haveibeenpwned.com and finding some dumps
              that match, spells out security risk to you proportionally to your
              security habits, but you should definitely assume the password is
              compromised and change it before someone uses it.
            </p>
            <p>Good behavior:</p>
            <ul>
              <li>Use strong passwords</li>
              <li>Use unique passwords for all services</li>
              <li>Use two-factor authentication</li>
              <li>Be thoughful about vinculating credit cards to accounts</li>
            </ul>
          </div>
          <p>
            The best approach to this question is to search for a balance in the
            security vs. convenience tradeoff.
          </p>
          <em className="important">Security x Convenience</em>
          <p>
            Too much security could lock a person out of their own account for
            trivial reasons, e.g. they forgot their phone at work, or make the
            credential management a stressful experience. The main risk to watch
            out for
            <strong>
              is reusing the same password across multiple services
            </strong>. People that reuse passwords are the only affected by
            credential stuffing. The second risk is
            <strong>to share your credit card irresponsibly</strong>. Fair sized
            sites and services popular with certain crowds, as well as games,
            are places to be careful.
          </p>
          <p>
            To generate unique passwords for each service, use a password
            manager. It will also provide strong passwords: Use the password
            generator and create something you would hate to type. Also,
            nevermind typing passwords, copy-paste them. If a service blocks
            copy pasting passwords, complain to them, this is a mistake and only
            worsens security. Currently I use the
            <a href="https://keepass.info/" className="other-site">
              keepass password manager
            </a>{" "}
            and it works well for me. I use it because it's simple, free, open
            source, and available on all platforms. I sync my database to google
            drive to keep it up to date across my systems.
          </p>
          <em>Keepass 3 on Mac</em>
          <div className="container-image">
            <img
              className="screenshot"
              src={screen_keepass}
              alt="keepass program window"
            />
          </div>
          <p>
            To share your credit card responsibly, look for two-factor
            authentication. Since criminals look for the routes of least
            resistance to make money, they probably won't even bother to mess
            with an account two-factor authenticated. I've been using two-factor
            authentication for years and what works best for me is a phone app
            where I just accept a notification. An app with a code that changes
            every minute is fine but slightly annoying. It's important to keep
            backup codes saved in a piece of paper too, or make sure to have
            other routes to accessing the account besides two-factor
            authentication. This normally happens to me when my phone is
            unavailable, but it's rare. Backup codes saved me a few times and I
            highly recommend them.
          </p>
          <p>
            It's curious to look at haveibeenpwned, since they need to keep a
            copy of the password dump... Think about that, it's at least
            uncomfortable to imagine. Running a site to keep a copy of stolen
            data? The story of the site is a fun read, it goes over how it came
            to be, why, and how it was established as a benevolent service.
            Turns out the site is run by a security guy, and he seems to have a
            good reputation and has been receiving the right attention for
            haveibeenpwned, and that's good. Because the data has been dumped in
            the wild, actually collecting it and doing something good is the
            best course of action. Think about it, after being initially posted,
            the data will be quickly replicated, since many people will copy it
            immediately, and all these people are independent from one another.
            That means once it's out there, there's no going back.
          </p>
          <em>Watch out!</em>
        </p>
        <Backlinks />
      </div>
      <hr />
    </div>
  </div>
);

export default Pwned;
