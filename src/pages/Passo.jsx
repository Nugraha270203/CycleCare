import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/navbar";
import opt from "../assets/opt.png";
import Footer from "../component/Footer";
function Passo() {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div class="text-danger text-lg-center">NEW PASSWORD</div>
                <div class="text-lg-center">
                    <img src={opt} alt="" />
                </div>
            </div>
            <div className="container text-center" style={{ height: "10px", width: "40%" }}>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col">
                        <input
                            type="password"
                            className="form-control text-center"
                            id="Password"
                            placeholder="Enter Your New Password"
                        />
                    </div>
                </div>
            </div>
            <div className="form-group text-center my-5">
                <a href="/homelogin">
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
export default Passo;