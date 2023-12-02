import React from "react";
import Navbarlogin from "../component/Navbarlogin";
import { Link } from "react-router-dom";
import jirigen from "../assets/jirigen.png"
import jirigenp from "../assets/jirigenp.png"
import Footer from "../component/Footer";
import logo from "../assets/logo.svg";
import { Dropdown } from 'react-bootstrap';
import prof from "../assets/prof.png";
function Menuarticle() {
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
                                <Link to="/Homelogin" className="nav-link text-black fs-5 ">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item mx-auto p-2">
                                <Link to="/Komunitas" className="nav-link  fs-5  text-black">
                                    Comunity
                                </Link>
                            </li>
                            <li className="nav-item mx-auto p-2">
                                <Link to="/Tips" className="nav-link fs-5  text-black">
                                    Videos
                                </Link>
                            </li>
                            <li className="nav-item mx-auto p-2">
                                <Link to="/Menuarticle" className="nav-link active fs-5 text-black">
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

            <div className="container">
                <div className="container-fluid">
                    <h2 className="mt-5 fw-bold " style={{ paddingTop:"100px", paddingLeft:"0px",paddingRight:"0px", marginBottom:"0px" }}>Article</h2>
                    <p style={{ fontSize: "25px" }}> Yuk baca artikel untuk menambah wawasan kamu!</p>
                    <div className="d-flex justify-content-center">
                        <div class="card shadow-lg rounded-5" >
                            <div class="card-body">
                                <div className="row">
                                    <div className="col-md-10">
                                        <h5 class="card-title mt-3 ">Nah, apa kiranya cara yang tepat untuk merawat motor jenis ini? Simak tips selengkapnya di ulasan berikut yang sudah kami rangkum dari berbagai sumber terpercaya</h5>
                                    </div>
                                    <div className="col">
                                        <img src={jirigen} alt="" style={{ width: "80px", height: "auto" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="card-body rounded-5" style={{ marginTop: "-10px", backgroundColor: "#C53938" }}>
                                <div className="row text-white mx-4">
                                    <p className="text-white mt-1" href="">Admin, 22 November 2023  </p>
                                    <h2 class="card-title ">
                                        11 Cara Merawat Motor Matic Biar Awet Layaknya Motor Baru
                                    </h2>
                                    <a className="text-white" href="">Baca selengkapnya... </a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="container-fluid">
                <h2 className="fw-bold mt-5">Artikel Terkait Lainnya</h2>
                <div className=" mx-auto mt-4 mb-4" style={{ width: "250px" }}>
                    <div className="d-flex justify-content-center">
                        <div className="d-flex">
                            <div className="card shadow-lg mx-2 mb-1 rounded-4  text-white" style={{ backgroundColor: "#C53938", width: "22rem", height: "8srem" }}>
                                <div className="row">
                                    <div className="col-md-7 offset-md-1 mt-3">
                                        <p className="fw-bold">11 Cara Merawat Motor Matic Biar Awet Layaknya Motor Baru</p>
                                    </div>
                                    <div className="col mt-3">
                                        <img src={jirigenp} alt="" style={{ width: "80px", height: "auto" }} />
                                    </div>
                                </div>
                                <div className="mx-4">
                                    <p style={{ fontSize: "12px" }}>Nah, apa kiranya cara yang tepat untuk merawat motor jenis ini? Simak tips selengkapnya di ulasan berikut yang sudah kami rangkum dari berbagai sumber terpercaya.
                                        <br />
                                        <a href="/Article" className="fw-bold text-white">Baca selengkapnya...</a>
                                    </p>

                                </div>


                            </div>

                            <div className="card shadow-lg mx-2 mb-1 rounded-4  text-white" style={{ backgroundColor: "#C53938", width: "22rem", height: "8srem" }}>
                                <div className="row">
                                    <div className="col-md-7 offset-md-1 mt-3">
                                        <p className="fw-bold">11 Cara Merawat Motor Matic Biar Awet Layaknya Motor Baru</p>
                                    </div>
                                    <div className="col mt-3">
                                        <img src={jirigenp} alt="" style={{ width: "80px", height: "auto" }} />
                                    </div>
                                </div>
                                <div className="mx-4">
                                    <p style={{ fontSize: "12px" }}>Nah, apa kiranya cara yang tepat untuk merawat motor jenis ini? Simak tips selengkapnya di ulasan berikut yang sudah kami rangkum dari berbagai sumber terpercaya.
                                        <br />
                                        <a href="/Article" className="fw-bold text-white">Baca selengkapnya...</a>
                                    </p>

                                </div>


                            </div>
                            <div className="card shadow-lg mx-2  mb-1 rounded-4  text-white" style={{ backgroundColor: "#C53938", width: "22rem", height: "8srem" }}>
                                <div className="row">
                                    <div className="col-md-7 offset-md-1 mt-3">
                                        <p className="fw-bold">11 Cara Merawat Motor Matic Biar Awet Layaknya Motor Baru</p>
                                    </div>
                                    <div className="col mt-3">
                                        <img src={jirigenp} alt="" style={{ width: "80px", height: "auto" }} />
                                    </div>
                                </div>
                                <div className="mx-4">
                                    <p style={{ fontSize: "12px" }}>Nah, apa kiranya cara yang tepat untuk merawat motor jenis ini? Simak tips selengkapnya di ulasan berikut yang sudah kami rangkum dari berbagai sumber terpercaya.
                                        <br />
                                        <a href="/Article" className="fw-bold text-white">Baca selengkapnya...</a>
                                    </p>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className=" mx-auto" style={{ width: "250px" }}>
                    <div className="d-flex justify-content-center">
                        <div className="d-flex">
                            <div className="card shadow-lg mx-2 mb-1 rounded-4  text-white" style={{ backgroundColor: "#C53938", width: "22rem", height: "8srem" }}>
                                <div className="row">
                                    <div className="col-md-7 offset-md-1 mt-3">
                                        <p className="fw-bold">11 Cara Merawat Motor Matic Biar Awet Layaknya Motor Baru</p>
                                    </div>
                                    <div className="col mt-3">
                                        <img src={jirigenp} alt="" style={{ width: "80px", height: "auto" }} />
                                    </div>
                                </div>
                                <div className="mx-4">
                                    <p style={{ fontSize: "12px" }}>Nah, apa kiranya cara yang tepat untuk merawat motor jenis ini? Simak tips selengkapnya di ulasan berikut yang sudah kami rangkum dari berbagai sumber terpercaya.
                                        <br />
                                        <a href="/Article" className="fw-bold text-white">Baca selengkapnya...</a>
                                    </p>

                                </div>


                            </div>

                            <div className="card shadow-lg mx-2 mb-1 rounded-4  text-white" style={{ backgroundColor: "#C53938", width: "22rem", height: "8srem" }}>
                                <div className="row">
                                    <div className="col-md-7 offset-md-1 mt-3">
                                        <p className="fw-bold">11 Cara Merawat Motor Matic Biar Awet Layaknya Motor Baru</p>
                                    </div>
                                    <div className="col mt-3">
                                        <img src={jirigenp} alt="" style={{ width: "80px", height: "auto" }} />
                                    </div>
                                </div>
                                <div className="mx-4">
                                    <p style={{ fontSize: "12px" }}>Nah, apa kiranya cara yang tepat untuk merawat motor jenis ini? Simak tips selengkapnya di ulasan berikut yang sudah kami rangkum dari berbagai sumber terpercaya.
                                        <br />
                                        <a href="/Article" className="fw-bold text-white">Baca selengkapnya...</a>
                                    </p>

                                </div>


                            </div>
                            <div className="card shadow-lg mx-2  mb-1 rounded-4  text-white" style={{ backgroundColor: "#C53938", width: "22rem", height: "8srem" }}>
                                <div className="row">
                                    <div className="col-md-7 offset-md-1 mt-3">
                                        <p className="fw-bold">11 Cara Merawat Motor Matic Biar Awet Layaknya Motor Baru</p>
                                    </div>
                                    <div className="col mt-3">
                                        <img src={jirigenp} alt="" style={{ width: "80px", height: "auto" }} />
                                    </div>
                                </div>
                                <div className="mx-4">
                                    <p style={{ fontSize: "12px" }}>Nah, apa kiranya cara yang tepat untuk merawat motor jenis ini? Simak tips selengkapnya di ulasan berikut yang sudah kami rangkum dari berbagai sumber terpercaya.
                                        <br />
                                        <a href="/Article" className="fw-bold text-white">Baca selengkapnya...</a>
                                    </p>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
export default Menuarticle;