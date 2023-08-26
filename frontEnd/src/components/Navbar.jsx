import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <div className="menu">
        <div className="menu-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="menu-buttons">
          <Link to="signup"><button className="cta-btn">Sign Up</button></Link>
          <Link to="login"><button className="cta-btn">Login</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
