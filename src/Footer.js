import React from "react";
import { Button } from "bootstrap";
import Map from "./googlemap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fainstagram } from "@fortawesome/free-brands-svg-icons";
console.log(process.env);
const Footer = () => {
  return (
    <div className="Form-Container">
      <ul className="FbusinessCR">
        <li>
          <h3> GM Nails</h3>
        </li>
        <li>7335 West Sand Lake Rd</li>
        <li>Orlando, FL 32819</li>
        <li>T: (407) 953-3540</li>
      </ul>

      <div className="gmaps">
        <Map />
      </div>

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
