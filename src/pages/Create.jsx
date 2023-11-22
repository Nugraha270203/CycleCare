import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../component/navbar";
import Footer from "../component/Footer";
import C12 from "../assets/c12.png";
function Create() {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div class="text-danger text-lg-center">Create Username</div>
                <div class="text-lg-center">
                    <p> You can always change it.</p>
                </div>
                <div class="text-lg-center">
                    <img src={C12} alt="" />
                </div>
            </div>
            <div className="container text-center my-3" style={{ height: "10px", width: "40%" }}>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control text-center"
                            id="otp"
                            placeholder="Enter your create Username"
                        />
                    </div>
                </div>
            </div>        
            <div className="form-group text-center my-5">
                <a href="homelogin">
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
    );
}
export default Create;
