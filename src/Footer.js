import React from "react";
import Map from "./API/googlemap";
import ContactComponent from "./Contact/ContactComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="Form-Container">
      <ul className="FbusinessCR">
        <li>
          <h4 className="FBusinessid"> GM Nails</h4>
        </li>
        <li>7335 West Sand Lake Rd</li>
        <li>Orlando, FL 32819</li>
        <li className="businessP">T: (407) 953-3540</li>
        <li>Follow us:</li>
        <li className="socials">
          <a href="https://www.instagram.com/sns.colors.martinez/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100064660609850">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
      </ul>

      <div className="gmaps">
        <Map />
      </div>

      <div className="Contactcomponent">
        <ContactComponent />
      </div>
    </div>
  );
};

export default Footer;
