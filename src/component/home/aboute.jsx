import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import mockupabout from "../../assets/mockupabout.png";

function Aboute() {


    return (
        <>
            <div className="" style={{}}>

                <div id="About" className="container-fluid" style={{ paddingTop: "0px", paddingLeft: "0px", paddingRight: "0px", marginBottom: "0px" }}>
                    <div className="landing-section">
                        <div
                            className="row"
                            style={{ backgroundColor: "#C53938", minHeight: "100vh" }}
                        >
                            <div className="col-md-5 offset-md-1">
                                <div className="text-white mt-5 " style={{ marginLeft: "50px" }}>
                                    <br />
                                    <h1 className="mt-5" style={{ borderBottom: "3px solid orange", width: "100px" }}></h1>
                                    <h1 className="fw-bold text-center" style={{ width: "180px" }}>
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
                                <img className="mt-5"
                                    src={mockupabout}
                                    alt=""
                                    style={{
                                        paddingTop: "85  px",
                                        width: "100%",
                                        height: "auto",
                                        position: "relative",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Aboute;
