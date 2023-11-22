import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarlogin from "../component/Navbarlogin";
import Bghomelogin from "../assets/bghomelogin.png";
import { Link } from "react-router-dom";
import foto from "../assets/foto.png"
import card from "../assets/card.png"
import card2 from "../assets/card2.png"
import card3 from "../assets/card3.png"
import card4 from "../assets/card4.png"
import card5 from "../assets/card5.png"

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
                <Link className="mx-3" to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg mt-5 mb-1 rounded-4 " style={{ width: "12rem", height: "15rem" }}>
                    <img
                      src={card}
                      className="card-img-top img-fluid rounded-top-4 "
                      alt="..."
                    />

                  </div>
                </Link>

                <Link className="mx-3" to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg mt-5 mb-1 rounded-4 " style={{ width: "12rem", height: "15rem" }}>
                    <img
                      src={card2}
                      className="card-img-top img-fluid rounded-top-4 "
                      alt="..."
                    />

                  </div>
                </Link>
                <Link className="mx-3" to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg mt-5 mb-1 rounded-4 " style={{ width: "12rem", height: "15rem" }}>
                    <img
                      src={card3}
                      className="card-img-top img-fluid rounded-top-4 "
                      alt="..."
                    />

                  </div>
                </Link>

                <Link className="mx-3" to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg mt-5 mb-1 rounded-4 " style={{ width: "12rem", height: "15rem" }}>
                    <img
                      src={card4}
                      className="card-img-top img-fluid rounded-top-4 "
                      alt="..."
                    />

                  </div>
                </Link>
                <Link className="mx-3" to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg mt-5 mb-1 rounded-4 " style={{ width: "12rem", height: "15rem" }}>
                    <img
                      src={card5}
                      className="card-img-top img-fluid rounded-top-4 "
                      alt="..."
                    />

                  </div>
                </Link>


              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="container-fluid">
          <div className="text-center mx-auto" style={{ width: "250px" }}>

            <div className="d-flex justify-content-center">
              <div className="d-flex">
                a

                <Link className="mx-3" to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg mt-5 mb-1 rounded-4 " style={{ width: "12rem", height: "15rem" }}>
                    <img
                      src={card2}
                      className="card-img-top img-fluid rounded-top-4 "
                      alt="..."
                    />

                  </div>
                </Link>
                <Link className="mx-3" to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg mt-5 mb-1 rounded-4 " style={{ width: "12rem", height: "15rem" }}>
                    <img
                      src={card3}
                      className="card-img-top img-fluid rounded-top-4 "
                      alt="..."
                    />

                  </div>
                </Link>

                <Link className="mx-3" to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg mt-5 mb-1 rounded-4 " style={{ width: "12rem", height: "15rem" }}>
                    <img
                      src={card4}
                      className="card-img-top img-fluid rounded-top-4 "
                      alt="..."
                    />

                  </div>
                </Link>
                <Link className="mx-3" to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg mt-5 mb-1 rounded-4 " style={{ width: "12rem", height: "15rem" }}>
                    <img
                      src={card5}
                      className="card-img-top img-fluid rounded-top-4 "
                      alt="..."
                    />

                  </div>
                </Link>


              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container-fluid">
          <div class="card mt-5 mb-5" style={{width: "100%"}}>
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
        </div>
      </div>



    </>
  );
}

export default Homelogin;