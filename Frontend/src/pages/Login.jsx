import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../component/Footer";
import logon from "../assets/logon.png";
import bg5 from "../assets/bg5.png";
import Mobilelogin from "../assets/Mobile login.gif"
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const backgroundStyle = {
    backgroundImage: `url(${bg5})`,
    backgroundSize: "cover",
    backgroundPosition: "flex",
    minHeight: "100vh",
  };
  
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [loginStatus, setLoginStatus]=useState(""); 
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://localhost:8082/login', {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        const userData = response.data;
        setLoginStatus(userData.username);
  
        // Simpan data pengguna di localStorage
        localStorage.setItem('userData', JSON.stringify(userData));
        navigate('/homelogin');
      }
      console.log(response);
    });
  };
  
  
  return (
    <div className="background" style={backgroundStyle}>
      <div className="container">
        <a className="navbar-brand" href="/Home">
          <img src={logon} alt="Logo" width="140" height="50" />
        </a>
        <div className="card mt-5 mx-auto mb-5" style={{ maxWidth: "80%", borderRadius: "15px", border: "none" }}>
          <div className="row no-gutters">
            <div className=" col-md-6" style={{ backgroundColor: "white", padding: "20px", borderRadius: "15px 0 0 15px" }}>
              <div className="container d-flex flex-column align-items-center">
                <img src={Mobilelogin} alt="" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
            <div className="col-md-6" style={{ backgroundColor: "white", padding: "20px", borderRadius: "0 15px 15px 0" }}>
              <blockquote className=" mt-4 blockquote mb-0">
                <br />
                <div className="container d-flex flex-column align-items-center">
                  <h3 className=" text-danger mx-auto">Login</h3>
                  <h4>{loginStatus}</h4>
                </div>
                <div className="form-group md-8">
                  <input type="email" className="form-control mt-4" id="email" placeholder="Enter Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <input type="password" className="form-control mt-4" id="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group text-center mt-3">
                    <button type="button" className="btn btn-danger btn-lg btn-sm rounded-pill" style={{ width: "100%" }} onClick={handleLogin}>
                      Login
                    </button>
                </div>
                <div className="container mt-4 d-flex flex-column align-items-center">
                  <a href="/Lupa" className="text-black" style={{ fontSize: "13px" }}>Forgot password?</a>
                  <p className="text-black" style={{ fontSize: "13px" }}>Don’t have an account?
                    <a href="/Regis" className="text-black" style={{ fontSize: "13px" }}> Sign Up</a>
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>

        <br />
      </div>
      <Footer />
    </div>
  );
}

export default Login;
