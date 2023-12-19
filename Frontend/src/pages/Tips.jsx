import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarlogin from "../component/Navbarlogin";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Dropdown } from 'react-bootstrap';
import prof from "../assets/prof.png";
import tips1 from "../assets/tips1.png";
import tips2 from "../assets/tips2.png";
import tips3 from "../assets/tips3.png";




function Tips() {
    return (
        <>
        <nav className="fixed-top navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3 bg-body-tertiary rounded">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} yarnalt="Logo" width="150" height="50" />
                </a>
                <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item mx-auto p-2">
                            <Link to="/Homelogin" className="nav-link fs-5 text-black">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item mx-auto p-2">
                            <Link to="/Komunitas" className="nav-link  fs-5 text-black">
                                Comunity
                            </Link>
                        </li>
                        <li className="nav-item mx-auto p-2">
                            <Link to="/Tips" className="nav-link active fs-5 text-black">
                                Videos
                            </Link>
                        </li>
                        <li className="nav-item mx-auto p-2">
                            <Link to="/Menuarticle" className="nav-link fs-5 text-black">
                                Article
                            </Link>
                        </li>
                        {/* <li className="nav-item mx-auto p-2">
              <Link to="/" className="nav-link fw-bold fs-5 text-black">
                Consultation
              </Link>
            </li> */}
                    </ul>
                </div>

                <Dropdown>
                    <Dropdown.Toggle variant="" className="rounded-circle" style={{ border: "none" }}>
                        <img src={prof} alt="" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/Profile" >Profile</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="/Login">Log out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                {/* <ul className="navbar-nav">
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
        </button> */}
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
            <section>
                <div className="container">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div style={{ fontSize: "25px", marginLeft: "100px", marginBottom: "5px", fontWeight: "600" }}>
                        Tips & Tutorial
                    </div>
                    <div style={{ marginLeft: "100px" }}>
                        Ayo lihat video tips & tutorial yang kami sediakan!
                    </div>
                    <div style={{ marginTop: "20px", marginLeft:"25%" }}>
                        <div>
                            <a href="/Video" >
                                <img src="/src/assets/tips1.png" alt="tips" style={{ width: "200px", marginRight: "20px", borderRadius:"10px" }} />
                            </a>
                            <a href="/Video" >
                                <img src="/src/assets/tips2.png" alt="tips" style={{ width: "200px", marginRight: "20px", borderRadius:"10px" }} />
                            </a><a href="#" >
                                <img src="/src/assets/tips3.png" alt="tips" style={{ width: "200px", marginRight: "20px", borderRadius:"10px" }} />
                            </a>
                        </div>
                    </div>
                    <div style={{ marginTop: "20px", marginLeft:"25%" }}>
                        <a href="#" >
                            <img src="/src/assets/tips1.png" alt="tips" style={{ width: "200px", marginRight: "20px", borderRadius:"10px" }} />
                        </a>
                        <a href="#" >
                            <img src="/src/assets/tips2.png" alt="tips" style={{ width: "200px", marginRight: "20px", borderRadius:"10px" }} />
                        </a>
                        <a href="#" >
                            <img src="/src/assets/tips3.png" alt="tips" style={{ width: "200px", marginRight: "20px", borderRadius:"10px" }} />
                        </a>
                        
                    </div>
                    <div style={{ marginTop: "20px", marginLeft:"25%" }}>
                        <a href="#" >
                            <img src="/src/assets/tips1.png" alt="tips" style={{ width: "200px", marginRight: "20px", borderRadius:"10px" }} />
                        </a>
                        <a href="#" >
                            <img src="/src/assets/tips2.png" alt="tips" style={{ width: "200px", marginRight: "20px", borderRadius:"10px" }} />
                        </a>
                        <a href="#" >
                            <img src="/src/assets/tips3.png" alt="tips" style={{ width: "200px", marginRight: "20px", borderRadius:"10px" }} />
                        </a>
                        
                    </div>
                    <div style={{ marginTop: "20px", marginLeft:"25%" }}>
                        <a href="#" >
                            <img src="/src/assets/tips1.png" alt="tips" style={{ width: "200px", marginRight: "20px", borderRadius:"10px" }} />
                        </a>
                        <a href="#" >
                            <img src="/src/assets/tips2.png" alt="tips" style={{ width: "200px", marginRight: "20px", borderRadius:"10px" }} />
                        </a>
                        <a href="#" >
                            <img src="/src/assets/tips3.png" alt="tips" style={{ width: "200px", marginRight: "20px", borderRadius:"10px" }} />
                        </a>
                        
                    </div>

                </div>
            </section>
            <Footer />
        </>
    );
}
export default Tips;