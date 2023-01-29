import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/fontawesome-free-solid";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <nav className="nav-title">
        <h1>
          <Link to="/">GM Nails</Link>
        </h1>
      </nav>
      <nav className="nav-body">
        <div className="Nav-item">
          <Link to="/">Home</Link>
        </div>
        <div className="Nav-item">
          <Link to="/about">About Me</Link>
        </div>
        <div className="Nav-item">
          <Link to="/services">Services</Link>
        </div>
        <div className="Nav-item">
          <a href="tel:PHONE_NUM">
            <FontAwesomeIcon icon={faPhone} />
            407-953-3540
          </a>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
