import { MenuOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import './styles/Header.css'


const Header = () => {
  return (
    <div className="header">
      <nav>
        <div className="logo">
          <h1>Shadman</h1>
        </div>

        <ul className="ul-items">
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/products">Blog</Link>
          </li>
          <li>
            <Link to="/products">Service</Link>
          </li>
          <li>
            <Link to="/products">Contacts</Link>
          </li>
          <div className="hamburger-menu">
            <MenuOutlined className="menu" />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

