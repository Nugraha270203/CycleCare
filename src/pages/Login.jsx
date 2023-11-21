import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../component/navbar";
import phone from "../assets/phone.png";
import Bodi from "../component/Bodi";
import footer from "../assets/footer.png"
function Login() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div class="text-danger text-lg-center">Login</div>
        <div class="text-lg-center">
          <p> Welcome Back! Please Log in to access your account.</p>
        </div>
        <div class="text-lg-center">
          <img src={phone} alt="" />
        </div>
      </div>
      <Bodi />

      <div id="footer" className="container-fluid mt-5" style={{ padding: 0 }}>
        <div className="landing-section">
          <img
            src={footer}
            alt=""
            style={{ width: "100%", height: "auto", position: "relative" }}
          />
        </div>
      </div>
    </>
  );
}
export default Login;
