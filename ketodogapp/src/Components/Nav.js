import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Nav.css";
import Logo from "../Images/is.jpg";

function Nav() {
  return (
    <nav className="nav">
      <img src={Logo} alt="medical cross" className="logo" />
      <ul className="nav-links">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <Link to="/resources" style={{ textDecoration: "none" }}>
          <li>Resources</li>
        </Link>
        <Link to="/mealplan" style={{ textDecoration: "none" }}>
          <li>Meal Plan</li>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
