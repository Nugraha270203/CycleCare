import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" width="150" height="50" />
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

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-auto p-2">
              <Link to="/" className="nav-link fw-bold fs-5 text-black">
                Home
              </Link>
            </li>
            <li className="nav-item mx-auto p-2">
              <Link to="/About" className="nav-link fw-bold fs-5 text-black">
                About Us
              </Link>
            </li>
            <li className="nav-item mx-auto p-2">
              <Link to="/Feature" className="nav-link fw-bold fs-5 text-black">
                Feature
              </Link>
            </li>
            <li className="nav-item mx-auto p-2">
              <Link to="/Article" className="nav-link fw-bold fs-5 text-black">
                Article
              </Link>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/signup" className="nav-link text-black">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>

      <button type="button" className="btn btn-danger rounded-pill">
        <Link to="/Login" className="text-white" style={{ textDecoration: "none" }}>
          Login
        </Link>
      </button>
    </nav>
  );
}

export default Navbar;
