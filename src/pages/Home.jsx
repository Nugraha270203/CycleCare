import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingNavbar from "../component/navbarlandingpage";
import bgcustom from "../assets/bgcustom.png";
import about from "../assets/about.png";
import fitur from "../assets/fitur.png";
import logo from "../assets/logo.svg";
import footer from "../assets/footer.png";
import foto from "../assets/foto.png";
import mockupabout from "../assets/mockupabout.png";
function LandingPage() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3 bg-body-tertiary rounded">
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
            <Link
              to="/Login"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
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
      <div id="Home" className="container-fluid" style={{ padding: 0 }}>
        <div className="landing-section">
          <img
            src={bgcustom}
            alt=""
            style={{ width: "100%", height: "auto", position: "relative" }}
          />
        </div>
      </div>

      <div id="About" className="container-fluid" style={{ padding: 0 }}>
        <div className="landing-section">
          <div
            className="row"
            style={{ backgroundColor: "#C53938", minHeight: "60vh" }}
          >
            <div className="col-md-5 offset-md-1">
              <div className="text-white mt-4" style={{ marginLeft: "50px" }}>
                <h1
                  className="fw-bold text-center"
                  style={{ borderBottom: "3px solid white", width: "180px" }}
                >
                  About Us
                </h1>
                <h3 className="mt-5 fs-4">
                  This application will be the best solution for you those of
                  you who own or like motorbikes to take care of you information
                  about health and performance with these features website
                  offers
                </h3>
                <button className="btn btn-light rounded rounded-pill mt-5">
                  <Link
                    to="/More"
                    className="text-black fw-bold"
                    style={{ textDecoration: "none" }}
                  >
                    More -{">"}
                  </Link>
                </button>
              </div>

            </div>
              <div className="col-md-5 offset-md-1 mt-5">
                <img
                  src={mockupabout}
                  alt=""
                  style={{
                    width: "100%",
                    height: "auto",
                    position: "relative",
                  }}
                />
              </div>
          </div>
        </div>
      </div>

      <div id="Fitur" className="container-fluid" style={{ padding: 0 }}>
        <div className="landing-section">
          <img
            src={fitur}
            alt=""
            style={{ width: "100%", height: "auto", position: "relative" }}
          />
        </div>
      </div>

      <div id="Article" className="container-fluid" style={{ padding: 0 }}>
        <div
          className="landing-section"
          style={{ backgroundColor: "#FFD573", minHeight: "60vh" }}
        >
          <div className="text-center mx-auto" style={{ width: "150px" }}>
            <br />
            <h1
              className="text-black fw-bold"
              style={{ borderBottom: "3px solid red" }}
            >
              Article
            </h1>
            <div className="d-flex justify-content-center">
              <div className="d-flex">
                <div
                  className="card mt-5 mb-5 rounded-4 "
                  style={{ width: "20rem" }}
                >
                  <img
                    src={foto}
                    className="card-img-top img-fluid rounded-top-4 "
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text text-start fw-bold">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>

                <div
                  className="card mt-5  mb-5  mx-5 rounded-4"
                  style={{ width: "20rem" }}
                >
                  <img
                    src={foto}
                    className="card-img-top img-fluid rounded-top-4"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text text-start fw-bold">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>

                <div
                  className="card mt-5   mb-5 rounded-4"
                  style={{ width: "20rem" }}
                >
                  <img
                    src={foto}
                    className="card-img-top img-fluid rounded-top-4"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text text-start fw-bold">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer" className="container-fluid" style={{ padding: 0 }}>
        <div className="landing-section">
          <img
            src={footer}
            alt=""
            style={{ width: "100%", height: "auto", position: "relative" }}
          />
        </div>
      </div>

    </>
  );
}

export default LandingPage;
