import React from "react";

const EmailMe = props => (
  <div
    id="email-me"
    className="email-me"
    role="region"
    aria-label="Send an email to Thomazella using this formulary"
    {...props}
  >
    <form
      action="email-handler.php"
      method="post"
      name="Send Thomazella an email"
      aria-labelledby="lgn"
    >
      <fieldset role="presentation">
        <legend title="Send me an email" id="lgn">
          Send me an email!
        </legend>
        <h2>Send me an email!</h2>
        <div className="container-labelAndInput">
          <label htmlFor="sender-name">Your name</label>
          <input
            type="text"
            id="sender-name"
            name="name"
            autoComplete="name"
            placeholder="Mr. Foo Bar"
            title="Please provide your name"
            required
          />
        </div>
        <div className="container-labelAndInput">
          <label htmlFor="sender-email">Your email</label>
          <input
            type="email"
            id="sender-email"
            name="email"
            autoComplete="email"
            title="Please provide an email address containing an 'at' and a 'dot'"
            placeholder="yourname@provider.com"
            pattern=".+@.+[.].+"
          />
        </div>
        <label htmlFor="email-body"> Your message</label>
        <textarea
          name="message"
          id="email-body"
          rows="15"
          cols="30"
          title="Please provide a message with at least 10 characters"
          required
          maxLength="499"
          minLength="10"
        />
        <input
          type="submit"
          id="submit-button"
          value="Send"
          name="send email"
        />
      </fieldset>
    </form>
  </div>
);

export default EmailMe;
