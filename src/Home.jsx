import React from "react";
import "./Home.css";
import Button from "./Button";
import Card from "./Card";
import UseState from "./UseState";

const Navbar = () => {
  return ( <>
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <a href="/">MR-Sandy</a>
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

   
    <h3  style={{textAlign: "center", alignItems: "center", fontSize:"49px",}} ><a href="/UseState"> <button>useState😍</button></a></h3>
    <h3  style={{textAlign: "center", alignItems: "center", fontSize:"49px",}} ><a href="/UseEffect"> <button>UseEFFECT😚</button></a></h3>

    <Card/>
    
    <Card/>



    
    
    </>
    
  );
};

export default Navbar;

