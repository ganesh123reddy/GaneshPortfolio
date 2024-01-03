import React from "react";
import "../App.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="navbar-name">Giridhara Ganesh Reddy | Talla</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto pe-4">
            <li className="nav-item me-4">
              <a
                className="nav-link active"
                aria-current="page"
                href="#about-section"
              >
                <span className="navbar-links">About</span>
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#experience">
                <span className="navbar-links">Work</span>
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#education">
                <span className="navbar-links">Study</span>
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#projects">
                <span className="navbar-links">Projects</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
