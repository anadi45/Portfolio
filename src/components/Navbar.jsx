import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-links">
          <a href="/">About</a>
          <a href="/experience">Experience</a>
          <a href="/projects">Projects</a>
          <a href="/skills">Skills</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
