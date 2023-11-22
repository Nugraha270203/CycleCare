import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/navbar";
import opt from "../assets/opt.png";
import Footer from "../component/Footer";
function Otp() {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div class="text-danger text-lg-center">Enter OTP</div>
                <div class="text-lg-center">
                    <p> Check your inbox or spam from your email.</p>
                </div>
                <div class="text-lg-center">
                    <img src={opt} alt="" />
                </div>
            </div>
            <div className="container text-center" style={{ height: "10px", width: "40%" }}>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control text-center"
                            id="otp"
                            placeholder="_"
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control text-center"
                            id="otp"
                            placeholder="_"
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control text-center"
                            id="otp"
                            placeholder="_"
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control text-center"
                            id="otp"
                            placeholder="_"
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="text-lg-center my-5">
                    <a href="#">Resend OTP</a>
                </div>
            </div>
            <div className="form-group text-center my-2">
                <a href="/Create">
                    <button
                        type="button"
                        className="btn btn-danger btn-lg btn-sm rounded-pill"
                        style={{ width: "50%" }}
                    >
                        Continue
                    </button>
                </a>
            </div>
            <Footer />
        </>

    )
}
export default Otp;