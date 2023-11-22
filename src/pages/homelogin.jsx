import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarlogin from "../component/Navbarlogin";
import Bghomelogin from "../assets/bghomelogin.png";
import { Link } from "react-router-dom";
import foto from "../assets/foto.png"

function Homelogin() {
  return (
    <>
      <Navbarlogin />
      <div id="Home" className="container-fluid mt-2" style={{ padding: 0 }}>
        <div className="landing-section">
          <img
            src={Bghomelogin}
            alt=""
            style={{ width: "100%", height: "auto", position: "relative" }}
          />
        </div>
      </div>
      <div className="container">
        <div className="container-fluid">
          <div className="text-center mx-auto" style={{ width: "250px" }}>

            <div className="d-flex justify-content-center">
              <div className="d-flex">
                <Link to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg mt-5 mb-1 rounded-4 mx-4" style={{ width:"11rem", height:"15rem" }}>
                    <img
                      src={foto}
                      className="card-img-top img-fluid rounded-top-4 "
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text text-start fw-bold">
                        Some quick example 
                      </p>
                    </div>
                  </div>
                </Link>

                <Link to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg mt-5 mb-1 rounded-4 mx-4" style={{ width:"11rem", height:"15rem" }}>
                    <img
                      src={foto}
                      className="card-img-top img-fluid rounded-top-4 "
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text text-start fw-bold">
                        Some quick example 
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg mt-5 mb-1 rounded-4 mx-4" style={{ width:"11rem", height:"15rem" }}>
                    <img
                      src={foto}
                      className="card-img-top img-fluid rounded-top-4 "
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text text-start fw-bold">
                        Some quick example 
                      </p>
                    </div>
                  </div>
                </Link>

                <Link to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg mt-5 mb-1 rounded-4 mx-4" style={{ width:"11rem", height:"15rem" }}>
                    <img
                      src={foto}
                      className="card-img-top img-fluid rounded-top-4 "
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text text-start fw-bold">
                        Some quick example 
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg mt-5 mb-1 rounded-4 mx-4" style={{ width:"11rem", height:"15rem" }}>
                    <img
                      src={foto}
                      className="card-img-top img-fluid rounded-top-4 "
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text text-start fw-bold">
                        Some quick example 
                      </p>
                    </div>
                  </div>
                </Link>               


              </div>
            </div>
          </div>
        </div>
      </div>

    

      </>
    );
}

export default Homelogin;