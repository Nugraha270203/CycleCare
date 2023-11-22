import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import bgcustom from "../assets/bgcustom.png";
import about from "../assets/about.png";
import fitur from "../assets/fitur.png";
import logo from "../assets/logo.svg";
import footer from "../assets/footer.png";
import foto from "../assets/foto.png";
import mockupabout from "../assets/mockupabout.png";
import Nabarlandingpage from "../component/navbarlandingpage";

function LandingPage() {


  return (
    <>
      <div className="" style={{}}>

      <Nabarlandingpage />
      
      <div id="Home" className="container-fluid px" style={{ paddingTop:"20px", paddingLeft:"0px",paddingRight:"0px", marginBottom:"0px" }}>
        <div className="landing-section mt-5">
          <img
            src={bgcustom}
            alt=""
            style={{ width: "100%", height: "auto", position: "relative" }}
          />
        </div>
      </div>

      <div id="About" className="container-fluid" style={{ paddingTop:"0px", paddingLeft:"0px",paddingRight:"0px", marginBottom:"0px" }}>
        <div className="landing-section">
          <div
            className="row"
            style={{ backgroundColor: "#C53938", minHeight: "100vh" }}
          >
            <div className="col-md-5 offset-md-1">
              <div className="text-white mt-5 " style={{ marginLeft: "50px" }}>
                <h1
                  className="fw-bold text-center"
                  style={{paddingTop:"75px", borderBottom: "3px solid white", width: "180px" }}
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
                    className="fs-5 px-3 text-black fw-bold icon-link icon-link-hover"
                    style={{
                      "--bs-icon-link-transform": "translate3d(0, -.125rem, 0)",
                      textDecoration: "none",
                    }}
                    to="/More"
                  >
                    More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="14"
                      id="arrow"
                    >
                      <g
                        fill="none"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M1 7h16M11 1l6 6-6 6"></path>
                      </g>
                    </svg>
                  </Link>
                  {/* <Link
                    to="/More"
                    className="text-black fw-bold"
                    style={{ textDecoration: "none" }}
                  >
                    More -{">"}
                  </Link> */}
                </button>
              </div>
            </div>
            <div className="col-md-5 offset-md-1 mt-5">
              <img
                src={mockupabout}
                alt=""
                style={{
                  paddingTop:"85  px",
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
          style={{ backgroundColor: "#FFD573", minHeight: "100vh" }}
        >
          <div className="text-center mx-auto" style={{ width: "150px" }}>
            <br />
            <h1
              className="text-black fw-bold"
              style={{ marginTop:"80px", borderBottom: "3px solid red" }}
            >
              Article
            </h1>

            <div className="d-flex justify-content-center mt-3">
              <div className="d-flex">
                <Link to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card mt-5 mb-5 rounded-4 " style={{ width: "20rem" }}>
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
                </Link>

                <Link to="/Article" style={{ textDecoration: "none" }}>

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
                </Link>

                <Link to="/Article" style={{ textDecoration: "none" }}>

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
                </Link>
                  
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
      </div>

    </>
  );
}

export default LandingPage;
