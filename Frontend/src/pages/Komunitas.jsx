import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarlogin from "../component/Navbarlogin";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Dropdown } from 'react-bootstrap';
import prof from "../assets/prof.png";


function Komunitas() {
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
                            <Link to="/Komunitas" className="nav-link  fs-5 active text-black">
                                Comunity
                            </Link>
                        </li>
                        <li className="nav-item mx-auto p-2">
                            <Link to="/Tips" className="nav-link fs-5 text-black">
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


            <section style={{marginLeft:"100px"}}>
                <div className="container">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <div style={{fontSize:"10px", marginLeft:"100px", fontWeight:"500"}}>
                        <img src="/src/assets/logo.svg" alt="logo" className="mx-5"
                        style={{ width: "100px", marginBottom:"5px"}} /> 2 Minggu yang lalu
                    </div>
                    <div style={{fontSize:"18px", marginLeft:"170px", marginBottom:"10px", fontWeight:"600"}}>
                        Kemarin sore Honda telah menerbitkan variant Vario baru . . .
                    </div>
                    <div>
                        <img src="/src/assets/post1.png" alt="post"
                            style={{ width: "700px", marginLeft:"140px" }} />
                    </div>
                <div className="komen" style={{ width: "695px", marginLeft: "142px", marginTop: "15px" }}>
                <div style={{ position: "relative", display: "flex" }}>
                    <input
                    style={{ border: "1px solid black", flex: 1 }}
                    type="password"
                    className="form-control text-left"
                    id="Password"
                    placeholder="Komentar Anda"
                    />
                      <a href="#" style={{ position: "absolute", right: "15%", top: "50%", transform: "translateY(-52%)" }}>
                         <img src="/src/assets/emoji.png" alt="emoji" style={{ width: "25px" }} />
                      </a>
                    <a href="#"><button class="btn btn-danger" style={{borderRadius:"10px",width:"85px", marginLeft:"10px" }}>Kirim</button></a>
                </div>
                </div>    
                </div>

                <div className="container">
                    <br />
                    <br />
                    <div style={{fontSize:"10px", marginLeft:"100px", fontWeight:"500"}}>
                        <img src="/src/assets/komu1.png" alt="logo" className="mx-5"
                        style={{ width: "100px", marginBottom:"5px"}} /> 3 Minggu yang lalu
                    </div>
                    <div style={{fontSize:"18px", marginLeft:"170px", marginBottom:"10px", fontWeight:"600"}}>
                        Motorku encok guyss :D
                    </div>
                    <div>
                        <img src="/src/assets/post2.png" alt="post"
                            style={{ width: "700px", marginLeft:"140px" }} />
                    </div>
                <div className="komen" style={{ width: "695px", marginLeft: "142px", marginTop: "15px" }}>
                <div style={{ position: "relative", display: "flex" }}>
                    <input
                    style={{ border: "1px solid black", flex: 1 }}
                    type="password"
                    className="form-control text-left"
                    id="Password"
                    placeholder="Komentar Anda"
                    />
                      <a href="#" style={{ position: "absolute", right: "15%", top: "50%", transform: "translateY(-52%)" }}>
                         <img src="/src/assets/emoji.png" alt="emoji" style={{ width: "25px" }} />
                      </a>
                    <a href="#"><button class="btn btn-danger" style={{borderRadius:"10px",width:"85px", marginLeft:"10px" }}>Kirim</button></a>
                </div>
                </div>    
                </div>

                
            </section>
            <Footer />
        </>
    );
}
export default Komunitas;