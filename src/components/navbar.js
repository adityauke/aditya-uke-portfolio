import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/image-removebg-preview.png";

function Navbar() {
  return ( 
    <nav className="navbar navbar-expand-lg  fixed-top">
      <div className="container">
        <div className="logo-container">
          <NavLink exact to="/">
            <img src={logo} alt="Logo" style={{ height: "45px", width: "80%" }} />
          </NavLink>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/#home-section">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#projects-section">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#about-section">
                About me
              </a>
            </li>
          </ul>
          <NavLink to="/contact">
            <button className="btn btn-outline-dark btn-hover" style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>
              Contact me
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
