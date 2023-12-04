import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../component/Footer";
import logon from "../assets/logon.png";
import bg5 from "../assets/bg5.png";
import s1 from "../assets/s1.gif";

function Create() {
    const backgroundStyle = {
        backgroundImage: `url(${bg5})`,
        backgroundSize: "cover",
        backgroundPosition: "flex",
        minHeight: "100vh",
    };

    return (
        <div className="background" style={backgroundStyle}>
            <div className="container">
                <a className="navbar-brand" href="/Home">
                    <img src={logon} alt="Logo" width="20%" height="auto" />
                </a>

                <div class="card mt-5 mx-auto  " style={{ width: "30rem" }}>
                    <h2 className="mx-auto text-danger mt-3 mb-4">Create Your Username</h2>
                    <p className="text-lg-center">You can always change it</p>
                    <img src={s1} class="card-img-top mx-auto" alt="..." style={{ width: "80%", height: "auto" }} />
                    <div class="card-body">

                        <div className="c">
                            <div className="row d-flex mx-auto" style={{ height: "20px", width: "60%" }}>
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control text-center"
                                        id="create"
                                        placeholder="Create Your Username"
                                    />
                                </div>
                            </div>
                            <br />  
                            
                        </div>
                    </div>
                    <div className="form-group text-center my-1">
                    <a href="/homelogin">
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

export default Create;
