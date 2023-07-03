import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className="nav-title">
        <h1>
          <Link to="/">GM Nails</Link>
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <a href="tel:407-953-3540">
              <FontAwesomeIcon icon={faPhone} />
              407-953-3540
            </a>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
