import React from "react";
import { Button } from "bootstrap";
import Map from "./googlemap";
import ContactComponent from "./contactComponent/ContactComponent";
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
        <ContactComponent />
      </form>
    </div>
  );
};

export default Footer;
