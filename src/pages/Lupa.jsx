import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../component/navbar";
import Footer from "../component/Footer";
import mobile from "../assets/mobile.png";
function Lupa() {
    return (
        <>
            <Navbar />
            <div className="container-fluid" style={{ padding: 0 }}>
                <div className="landing-section">
                    <div className="row">
                        <div className="col-md-5 offset-md-1 mt-5">
                            <div class="text-danger text-center ">Please!!</div>
                            <div class="text-lg-center">
                                <p> Enter your username and your email..</p>
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
                                        placeholder="Enter Your Username"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        id="email"
                                        placeholder="Enter Your Email "
                                    />
                                </div>
                                <div className="form-group text-center mt-3">
                                    <a href="/Otp2">
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-lg btn-sm rounded-pill"
                                        style={{ width: "63%" }}
                                    >
                                        Continue
                                    </button>
                                    </a>
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
export default Lupa;
