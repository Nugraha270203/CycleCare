import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarlogin from "../component/Navbarlogin";
import sd from "../assets/sd.png";
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
import "../index.css"




function Homelogin() {
  return (
    <>
      <Navbarlogin />
      <div id="Home" className="container-fluid mt-2" style={{ paddingTop: "50px", paddingLeft: "0px", paddingRight: "0px", marginBottom: "0px" }}>
        <div className="landing-section">
          <img
            src={sd}
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
                <div className="card shadow-lg  mb-1 mx-3 rounded-4 " style={{ width: "15rem", height: "8srem" }}>
                  <img
                    src={c1}
                    className="card-img-top img-fluid rounded-top-4 "
                    alt="..."
                  />
                  <Link className="mx-3" to="/Tips" style={{ textDecoration: "none" }}>
                    <p className="text-start text-black fw-medium">How to check battery voltage?</p>
                  </Link>
                </div>
                <div className="card shadow-lg  mx-3 mb-1 rounded-4 " style={{ width: "15rem", height: "8srem" }}>
                  <img
                    src={c2}
                    className="card-img-top img-fluid rounded-top-4 "
                    alt="..."
                  />
                  <Link className="mx-3" to="/Tips" style={{ textDecoration: "none" }}>
                    <p className="text-start text-black fw-medium">How to maintain a motorbike?</p>
                  </Link>
                </div>
                <div className="card shadow-lg mx-3 mb-1 rounded-4 " style={{ width: "15rem", height: "8srem" }}>
                  <img
                    src={c3}
                    className="card-img-top img-fluid rounded-top-4 "
                    alt="..."
                  />
                  <Link className="mx-3" to="/Tips" style={{ textDecoration: "none" }}>
                    <p className="text-start text-black fw-medium">How to change engine oil?</p>
                  </Link>
                </div>
                <div className="card shadow-lg mx-3 mb-1 rounded-4 " style={{ width: "15rem", height: "8srem" }}>
                  <img
                    src={c4}
                    className="card-img-top img-fluid rounded-top-4 "
                    alt="..."
                  />
                  <Link className="mx-3" to="/Tips" style={{ textDecoration: "none" }}>
                    <p className="text-start text-black fw-medium">How to fill air tires?</p>
                  </Link>
                </div>



              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="more-button-container text-center align-item-center justify-content-center mt-5">
        <div className="line left"></div>
        <button className="more-button ">More</button>
        <div className="line right"></div>
      </div>
      <div className="container">
        <div className="container-fluid">
          <div className="d-flex justify-content-center mt-3">
            <div className="d-flex">
              <Link to="/Article" style={{ textDecoration: "none" }}>
                <div className="card shadow  mt-5 mb-5 rounded-4 " style={{ width: "20rem" }}>
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
                  className="card shadow mt-5  mb-5 mx-5 rounded-4"
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
                  className="card shadow  mt-5   mb-5 rounded-4"
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
      <div className="more-button-container text-center align-item-center justify-content-center mt-5">
        <div className="line left"></div>
        <button className="more-button ">More</button>
        <div className="line right"></div>
      </div>

      <Footer />

    </>
  );
}

export default Homelogin;