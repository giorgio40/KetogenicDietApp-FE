import React from 'react'
import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav className="nav">
      <h2>KetogenicDietsForDogCancer</h2>
     
        <ul className="nav-links">
       
          <Link to="/userhome">
            <li>Home</li>
          </Link>
          <Link to="/resources">
            <li>Resources</li>
          </Link>
          <Link to="/mealplan">
            <li>Meal Plan</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
        
      </nav>

  );
}

export default Nav
