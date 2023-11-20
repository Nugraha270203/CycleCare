import React from "react";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <div class="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" width="150" height="50" />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item mx-auto p-2">
              <a class="nav-link fw-bold fs-5 text-black" href="#">
                Home
              </a>
            </li>
            <li class="nav-item mx-auto p-2">
              <a class="nav-link fw-bold fs-5 text-black"  href="#">
                About Us
              </a>
            </li>
            <li class="nav-item mx-auto p-2">
              <a class="nav-link fw-bold fs-5 text-black"  href="#">
                Feature
              </a>
            </li>
            <li class="nav-item mx-auto p-2">
              <a class="nav-link fw-bold fs-5 text-black" href="#">
                Article
              </a>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-black" aria-current="page" href="#">
              Sing Up
            </a>
          </li>
        </ul>
      </div>

      <button type="button" class="btn btn-danger rounded-pill">
        <a href="" class="text-white" style={{ textDecoration: "none" }}>
          Danger
        </a>
      </button>
    </nav>
  );
}

export default Navbar;
