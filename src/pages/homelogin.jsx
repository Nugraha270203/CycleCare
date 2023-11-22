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
import c1 from "../assets/c1.png"
import c2 from "../assets/c2.png"
import c3 from "../assets/c3.png"
import c4 from "../assets/c4.png"
import cb1 from "../assets/cb1.png"
import cb2 from "../assets/cb2.png"
import cb3 from "../assets/cb3.png"
import Footer from "../component/Footer";




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
          <h2 className="mt-5 fw-bold"> Ready To Know?</h2>
          <p style={{ fontSize: "25px" }}>  Let’s start with the easy one !</p>
          <div className="text-center mx-auto" style={{ width: "250px" }}>
            <div className="d-flex justify-content-center">
              <div className="d-flex">
                <Link className="mx-3" to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg mt-3 mb-1 rounded-4 " style={{ width: "12rem", height: "15rem" }}>
                    <img
                      src={card}
                      className="card-img-top img-fluid rounded-top-4 "
                      alt="..."
                    />

                  </div>
                </Link>

                <Link className="mx-3" to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg mt-3 mb-1 rounded-4 " style={{ width: "12rem", height: "15rem" }}>
                    <img
                      src={card2}
                      className="card-img-top img-fluid rounded-top-4 "
                      alt="..."
                    />

                  </div>
                </Link>
                <Link className="mx-3" to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg mt-3 mb-1 rounded-4 " style={{ width: "12rem", height: "15rem" }}>
                    <img
                      src={card3}
                      className="card-img-top img-fluid rounded-top-4 "
                      alt="..."
                    />

                  </div>
                </Link>

                <Link className="mx-3" to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg mt-3 mb-1 rounded-4 " style={{ width: "12rem", height: "15rem" }}>
                    <img
                      src={card4}
                      className="card-img-top img-fluid rounded-top-4 "
                      alt="..."
                    />

                  </div>
                </Link>
                <Link className="mx-3" to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg mt-3 mb-1 rounded-4 " style={{ width: "12rem", height: "15rem" }}>
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
          <h2 className="mt-5 fw-bold"> Long Videos</h2>
          <p style={{ fontSize: "25px" }}> These videos can make you care more about your bike</p>
          <div className="text-center mx-auto" style={{ width: "250px" }}>
            <div className="d-flex justify-content-center">
              <div className="d-flex">
                <Link className="mx-3" to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg  mb-1 rounded-4 " style={{ width: "15rem", height: "8srem" }}>
                    <img
                      src={c1}
                      className="card-img-top img-fluid rounded-top-4 "
                      alt="..."
                    />

                  </div>
                </Link>
                <Link className="mx-3" to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg mb-1 rounded-4 " style={{ width: "15rem", height: "8rem" }}>
                    <img
                      src={c2}
                      className="card-img-top img-fluid rounded-top-4 "
                      alt="..."
                    />

                  </div>
                </Link>

                <Link className="mx-3" to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg mb-1 rounded-4 " style={{ width: "15rem", height: "8rem" }}>
                    <img
                      src={c3}
                      className="card-img-top img-fluid rounded-top-4 "
                      alt="..."
                    />

                  </div>
                </Link>
                <Link className="mx-3" to="/Article" style={{ textDecoration: "none" }}>
                  <div className="card shadow-lg  mb-1 rounded-4 " style={{ width: "15rem", height: "8rem" }}>
                    <img
                      src={c4}
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
          <h2 className="mt-5 fw-bold">Articles</h2>
          <p style={{ fontSize: "25px" }}>  Read these articles to get more insight</p>
          <div class="card mt-5 mb-5" style={{ width: "100%" }}>
            <a href="/Menuarticle">
            <img
              src={cb1}
              className="card-img-top img-fluid rounded-top-4 "
              alt="..."
            />
            </a>
          </div>

          <div class="card mt-5 mb-5" style={{ width: "100%" }}>
            <a href="">
            <img
              src={cb2}
              className="card-img-top img-fluid rounded-top-4 "
              alt="..."
            />
            </a>
          </div>

          <div class="card mt-5 mb-5" style={{ width: "100%" }}>
            <a href="">
              <img
                src={cb3}
                className="card-img-top img-fluid rounded-top-4 "
                alt="..."
              />
            </a>
          </div>

        </div>
      </div>

      <Footer />

    </>
  );
}

export default Homelogin;