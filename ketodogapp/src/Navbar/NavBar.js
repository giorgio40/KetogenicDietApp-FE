import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import image from "../Images/is.jpg";
const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <img src={image} alt="logo" className="logo" />
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/home" className="home">
          <li>Home</li>
        </Link>
        <Link to="/resources" className="resources">
          <li>Resources</li>
        </Link>
        <Link to="/mealplan" className="mealplan">
          <li>MealPlan</li>
        </Link>
        <Link to="/about" className="about">
          <li>About</li>
        </Link>
        <Link to="/" className="signout">
          <li>Signout</li>
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};

export default NavBar;
