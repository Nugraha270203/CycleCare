import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import fitur from "../assets/fitur.png";
import Homeld from "../component/home/home";
import footer from "../assets/footer.png";
import foto from "../assets/foto.png";
import Aboute from "../component/home/aboute";
import Nabarlandingpage from "../component/navbarlandingpage";
import Fitur from "../component/home/fitur";
function LandingPage() {


  return (
    <>
      <div className="" style={{}}>

        <Nabarlandingpage />
        <Homeld />
        <Aboute />
        <Fitur />

        

        <div id="Article" className="container-fluid" style={{ padding: 0 }}>
          <div
            className="landing-section"
            style={{ backgroundColor: "#FFD573", minHeight: "100vh" }}
          >
            <div className="text-center mx-auto" style={{ width: "150px" }}>
              <br />
              <h1
                className="text-black fw-bold"
                style={{ marginTop: "80px", borderBottom: "3px solid red" }}
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
