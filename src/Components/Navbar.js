import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavbarComp = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li><Link className="nav-link" to="/">Home</Link></li>
        <li><Link className="nav-link" to="/about">About Us</Link></li>
        <li><Link className="nav-link" to="/services">Insurance Services</Link></li>
        <li><Link className="nav-link" to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default NavbarComp;


