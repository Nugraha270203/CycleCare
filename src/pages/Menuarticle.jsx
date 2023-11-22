import React from "react";
import Navbarlogin from "../component/Navbarlogin";
import { Link } from "react-router-dom";
import jirigen from "../assets/jirigen.png"
import jirigenp from "../assets/jirigenp.png"
import Footer from "../component/Footer";
function Menuarticle() {
    return (
        <>
            <Navbarlogin />
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