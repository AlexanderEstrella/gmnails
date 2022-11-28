import React from "react";
import { Button } from "bootstrap";
const Footer = () => {
  return (
    <div className="Form-Container">
      <div></div>

      <form>
        <h2>Contact us</h2>
        <div className="form-label">
          <label className="Name-field" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" />
        </div>
        <div className="form-label">
          <label className="Email-field">Email</label>
          <input className="form-control" type="email" />
        </div>
        <div className="form-label">
          <label className="Message-label">Message</label>
          <textarea className="form-control" />
        </div>
        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Footer;
