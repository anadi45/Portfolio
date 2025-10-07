import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/">RB</Link>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`hamburger ${isMenuOpen ? "open" : ""}`}></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/experience"
            className={location.pathname === "/experience" ? "active" : ""}
            onClick={closeMenu}
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active" : ""}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className={location.pathname === "/skills" ? "active" : ""}
            onClick={closeMenu}
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
