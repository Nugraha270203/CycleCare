import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import mobile from "../assets/mobile.png";
import Bodi from "../component/Bodi";
import Footer from "../component/Footer";
import logon from "../assets/logon.png";
import bg5 from "../assets/bg5.png";

function Login() {
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
          <img src={logon} alt="Logo" width="140" height="50" />
        </a>
        <div className="container-fluid">
          <div className="card mx-5">
            <div className="landing-section">
              <div className="row">
                <div className="col-md-5 offset-md-1 mt-5">
                  <div class="text-lg-left">
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
                  <div class="text-danger text-center my-4 mx-5">
                    LOGIN
                  </div>
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mt-2"
                        id="email"
                        placeholder="Enter Your Email "
                      />
                    </div>
                    <div className="form-group md-8">
                      <input
                        type="password"
                        className="form-control mt-2"
                        id="password"
                        placeholder="Enter Your Password "
                      />
                    </div>
                    <div className="form-group text-center mt-3">
                      <a href="/Otp">
                        <button
                          type="button"
                          className="btn btn-danger btn-lg btn-sm rounded-pill"
                          style={{ width: "63%" }}
                        >
                          Login
                        </button>
                      </a>
                    </div>
                    <div class="form-group text-center mt-2">
                      <a href="#"> Forgot Password?</a>
                    </div>
                    <div className="form-group text-center my-2">
                      Don't have an account?
                      <a href="/login"> Sign in</a>
                    </div>
                    <br />
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
