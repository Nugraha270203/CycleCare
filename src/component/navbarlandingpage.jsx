import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../index.css";

function Navbarlandingpage() {
  const [activeSection, setActiveSection] = useState("Home");

  const handleScroll = () => {
    const sections = ["Home", "About", "Fitur", "Article"];

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top - 50 <= window.innerHeight / 2 && rect.bottom + 50 >= window.innerHeight / 2) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isSectionActive = (section) => section === activeSection ? "active" : "";


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
        <li className={`nav-item mx-auto p-2 ${isSectionActive("Home")}`}>
          <button
            className={`nav-link fs-5 text-black ${isSectionActive("Home")}`}
            onClick={() => scrollToSection("Home")}
          >
            Home
          </button>
        </li>
        <li className={`nav-item mx-auto p-2 ${isSectionActive("About")}`}>
          <button
            className={`nav-link fs-5 text-black ${isSectionActive("About")}`}
            onClick={() => scrollToSection("About")}
          >
            About Us
          </button>
        </li>
        <li className={`nav-item mx-auto p-2 ${isSectionActive("Fitur")}`}>
          <button
            className={`nav-link fs-5 text-black ${isSectionActive("Fitur")}`}
            onClick={() => scrollToSection("Fitur")}
          >
            Feature
          </button>
        </li>
        <li className={`nav-item mx-auto p-2 ${isSectionActive("Article")}`}>
          <button
            className={`nav-link fs-5 text-black ${isSectionActive("Article")}`}
            onClick={() => scrollToSection("Article")}
          >
            Content
          </button>
        </li>
        </ul>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/Regis" className="nav-link text-black">
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
