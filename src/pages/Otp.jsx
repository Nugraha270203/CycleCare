import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../component/Footer";
import logon from "../assets/logon.png";
import bg5 from "../assets/bg5.png";
import jj from "../assets/O1.gif"

function Otp() {
    const backgroundStyle = {
        backgroundImage: `url(${bg5})`,
        backgroundSize: "cover",
        backgroundPosition: "flex",
        minHeight: "100vh",
    };

    return (
        <div className="background" style={backgroundStyle}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logon} alt="Logo" width="20%" height="auto" />
                </a>

                <div class="card mt-5 mx-auto  " style={{ width: "30rem" }}>
                    <h2 className="mx-auto text-danger mt-3 mb-4">OTP</h2>
                    <img src={jj} class="card-img-top mx-auto" alt="..." style={{ width: "80%", height: "auto" }} />
                    <div class="card-body">

                        <div className="c">
                            <div className="row d-flex mx-auto" style={{ height: "10px", width: "60%" }}>
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
                            <br />  
                            
                        </div>
                    </div>
                    <div className="text-center">
                                <a className="text-danger" href="#">
                                    Resend OTP?
                                </a>
                            </div>
                    <div className="form-group text-center my-3">
                    <a href="/Create">
                        <button type="button"
                        className="btn btn-danger btn-lg btn-sm rounded-pill"
                        style={{ width: "50%", }}
                    >   Continue
                        </button>
                    </a>
                    </div>
                    <br />
                </div>
                <br />
            </div>
            <Footer />
        </div>
    );
}

export default Otp;
