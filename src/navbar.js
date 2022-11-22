import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <nav className="nav-title">
        <h1>GM Nails</h1>
      </nav>
      <ul className="nav-items">
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
      </ul>
      <nav className="nav-contact">
        <FontAwesomeIcon className="P-icon" icon="fa-solid fa-phone" />
        407-953-3540
      </nav>
    </nav>
  );
};

export default Navbar;
