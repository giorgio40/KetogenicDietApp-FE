import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Nav.css";
import Logo from "../Images/is.jpg";
import { useHistory } from "react-router-dom";

function Nav() {
  const history = useHistory();

  const handleClick = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <nav>
      <div className="nav-container">
      <div className="logo-container">
        <img src={Logo} alt="medical cross" className="logo" />
      </div>
      <div className="nav-links">
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
      </div>
      <div className="btn-div">
        <div className="button-div">
          <button className="logout-btn" onClick={handleClick}>
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Nav;
