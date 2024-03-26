import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="navbar-container text-light">
      <div className="navbar-logo">Tautswako Exquisite Cocktails</div>
      <ul id="main-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#About-us">About Us</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Events">Events</a>
        </li>
        <li>
          <Link to="/Quote">Quote</Link>
        </li>
        <li>
          <a href="#Contact">Contact us</a>
        </li>
      </ul>
      <button
        className="btn btn-primary open-close-button"
        onClick={toggleSidebar}
      >
        {showSidebar ? "Close" : "Open"}
      </button>

      <ul className={`sidebar-${showSidebar ? "active" : "inactive"}`}>
        <button className="btn btn-primary" onClick={toggleSidebar}>
          Close
        </button>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#About-us">About Us</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Events">Events</a>
        </li>
        <li>
          <Link to="/Quote">Quote</Link>
        </li>
        <li>
          <a href="#Contact">Contact us</a>
        </li>
      </ul>
    </div>
  );
};
