import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../component/navbar";
import Footer from "../component/Footer";
import mobile from "../assets/mobile.png";
function Regis() {
    return (
        <>
            <Navbar />
            <div className="container-fluid" style={{ padding: 0 }}>
                <div className="landing-section">
                    <div className="row">
                        <div className="col-md-5 offset-md-1 mt-5">
                            <div class="text-danger text-center ">Register</div>
                            <div class="text-lg-center">
                                <p> Join our community today! Create an account
                                    to unlock exclusive features
                                    and personalized experiences..</p>
                            </div>
                            <div class="text-lg-center">
                                <img
                                    src={mobile}
                                    alt=""
                                    style={{
                                        width: "200px",
                                        height: "auto",
                                        position: "relative",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-md-3 offset-md-1 mt-5">
                            <form>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="namaf"
                                        placeholder="Enter First Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        id="namal"
                                        placeholder="Enter Last Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        id="email"
                                        placeholder="Enter Email "
                                    />
                                </div>
                                <div className="form-group md-8">
                                    <input
                                        type="password"
                                        className="form-control mt-2"
                                        id="password"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="form-group text-center mt-3">
                                    <a href="/Otp">
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-lg btn-sm rounded-pill"
                                        style={{ width: "63%" }}
                                    >
                                        Register
                                    </button>
                                    </a>
                                </div>
                                <div class="form-group text-center mt-2">
                                    Already have an account?
                                    <a href="/login">Sign in</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Regis;
