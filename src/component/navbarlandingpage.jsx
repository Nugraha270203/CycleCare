import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";


function Navbarlandingpage() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (

   <nav className="fixed-top navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3 bg-body-tertiary" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="150" height="50" />
          </a>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-auto p-2">
                <button
                  className="nav-link fw-bold fs-5 text-black"
                  onClick={() => scrollToSection("Home")}
                >
                  Home
                </button>
              </li>
              <li className="nav-item mx-auto p-2">
                <button
                  className="nav-link fw-bold fs-5 text-black"
                  onClick={() => scrollToSection("About")}
                >
                  About Us
                </button>
              </li>
              <li className="nav-item mx-auto p-2">
                <button
                  className="nav-link fw-bold fs-5 text-black"
                  onClick={() => scrollToSection("Fitur")}
                >
                  Feature
                </button>
              </li>
              <li className="nav-item mx-auto p-2">
                <button
                  className="nav-link fw-bold fs-5 text-black"
                  onClick={() => scrollToSection("Article")}
                >
                  Article
                </button>
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
          <button type="button" className="btn btn-danger rounded-pill">
          <Link to="/Login" className="text-white" style={{ textDecoration: "none" }}>
  Login
</Link>
          </button>
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
        </div>
      </nav>
  );
}

export default Navbarlandingpage;
