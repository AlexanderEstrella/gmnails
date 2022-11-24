import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <nav className="nav-title">
        <h1>GM Nails</h1>
      </nav>
      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
      <nav className="nav-contact">
        <a href="tel:PHONE_NUM">
          <FontAwesomeIcon icon={faPhone} />
          407-953-3540
        </a>
      </nav>
    </nav>
  );
};

export default Navbar;
