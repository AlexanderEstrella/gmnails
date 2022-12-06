import React from "react";
import { Button } from "bootstrap";

function Goomaps() {
  return (
    <iframe src="https://www.google.com/maps/embed/v1/MAP_MODE?key=AIzaSyCSMWu4Up-mMVStZjT4Jg6DGK7nv4sG0-w&center=-81.47981, 28.45111&zoom=18&maptype=satellite"></iframe>
  );
}
const Footer = () => {
  return (
    <div className="Form-Container">
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

      <div className="gmaps">
        <Goomaps />
      </div>
    </div>
  );
};

export default Footer;
