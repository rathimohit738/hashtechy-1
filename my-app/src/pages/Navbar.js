import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">Hashtechy</a>
      </div>
      <div
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#">Close Menu</a>
        </li>

        <li>
          <a href="#">Categories</a>
        </li>
        <li>
          <a href="#">Makeup</a>
        </li>
        <ul className="submenu">
          <li>
            <a href="#">Face Makeup</a>
          </li>
          <li>
            <a href="#">Lip Makeup</a>
          </li>
          <li>
            <a href="#">Eye Makeup</a>
          </li>
          <li>
            <a href="#">Brushes &amp; Tools</a>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;