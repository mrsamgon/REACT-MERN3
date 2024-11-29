import React from "react";
import "./Home.css";
import Button from "./Button";
import Card from "./Card";

const Navbar = () => {
  return ( <>
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <a href="/">E-Shop</a>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
        <button>Search</button>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><button type="button"><a href="/login">log In</a></button></li>

      </ul>
    </nav>
    <Button huhu="color change here😀"/>
    <p>Welcome to my Website haai</p>

    <Card/>
    
    <Card/>


    
    
    </>
    
  );
};

export default Navbar;

