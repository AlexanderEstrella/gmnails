import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/fontawesome-free-solid";

const Navbar = () => {
  const [unset, setUnset] = useState(false);
  return (
    <nav className="nav-container">
      <nav className="nav-title">
        <div
          className={unset ? "nav-links" : "nav-items"}
          onScroll={() => setUnset(false)}
        >
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/about">About Us</Link>
          </div>
          <div>
            <Link to="/services">Services</Link>
          </div>
          <div>
            <a href="tel:PHONE_NUM">
              <FontAwesomeIcon icon={faPhone} />
              407-953-3540
            </a>
          </div>
        </div>
      </nav>
      <button className="hamburger" onClick={() => setUnset(!unset)}>
        {<FontAwesomeIcon icon="fa-solid fa-bars" />}
      </button>
    </nav>
  );
};

export default Navbar;
