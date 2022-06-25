import React, { useState } from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="Navbar-container">
      <div className="wrapper">
        <div className="logo">
          <h1>WEBSITE</h1>
        </div>
        <nav>
          <ul className="ul-items">
            <li>Home</li>
            <li>Products</li>
            <li>LogIn</li>
          </ul>
        </nav>
        <div className="input-container">
          <input type="text" className="SearchBar" />
          <button className="btn-search">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
