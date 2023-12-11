import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../component/Footer";
import logon from "../assets/logon.png";
import bg5 from "../assets/bg5.png";
import L1 from "../assets/L1.gif";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {

    const [firstNamereg, setFirstNamereg] = useState('');
    const [lastNamereg, setLastNamereg] = useState('');
    const [emailreg, setEmailreg] = useState('');
    const [passwordreg, setPasswordreg] = useState('');
    const [usenamereg, setUsernamereg] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState("");


    const handleRegister = async () => {
        try {
            // Kirim permintaan registrasi ke server
            const response = await axios.post('http://localhost:8082/regis', {
                email: emailreg,
                password: passwordreg,
                firstname: firstNamereg,
                lastname: lastNamereg,
                username: usenamereg  
            });
            alert('Akun berhasil dibuat!')
            navigate('/Login');
        }  catch (error) {
            alert('Email sudah digunakan');
        }        
    };
    



    return (
        <div className="background" style={{ backgroundImage: `url(${bg5})`, backgroundSize: "cover", backgroundPosition: "flex", minHeight: "100vh" }}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logon} alt="Logo" width="140" height="50" />
                </a>
                <div className="card mt-5 mx-auto mb-5" style={{ maxWidth: "80%", borderRadius: "15px", border: "none" }}>
                    <div className="row no-gutters">
                        <div className=" col-md-6" style={{ backgroundColor: "white", padding: "20px", borderRadius: "15px 0 0 15px" }}>
                            <div className="container d-flex flex-column align-items-center">
                                <img src={L1} alt="" style={{ width: "100%", height: "auto" }} />
                            </div>
                        </div>
                        <div className="col-md-6" style={{ backgroundColor: "white", padding: "20px", borderRadius: "0 15px 15px 0" }}>
                            <blockquote className="  blockquote mb-0">
                                <br />
                                <div className="container d-flex flex-column align-items-center">
                                    <h3 className=" text-danger mx-auto">Register</h3>


                                </div>
                                <div className="form-group md-8">
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" className="form-control mt-4" id="First" placeholder="First Name" onChange={(e) => setFirstNamereg(e.target.value)} />
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control mt-4" id="Last" placeholder="Last Name" onChange={(e) => setLastNamereg(e.target.value)} />
                                        </div>

                                    </div>
                                </div>
                                <div className="form-gorup md-8">
                                    <input type="text" className="form-control mt-4" id="Username" placeholder="Create Your Username" onChange={(e) => setUsernamereg(e.target.value)} />
                                    <input type="text" className="form-control mt-4" id="email" placeholder="Enter Your Email" onChange={(e) => setEmailreg(e.target.value)} />
                                    <input type="password" className="form-control mt-4" id="Password" placeholder="Enter Your Password" onChange={(e) => setPasswordreg(e.target.value)} />
                                </div>
                                <div className="form-group text-left mt-4 ">
                                    <button type="button" className="btn btn-danger btn-lg btn-sm rounded-pill" style={{ width: "100%" }} onClick={handleRegister}>
                                        Register
                                    </button>
                                    {/* <button type="button" className="btn btn-danger btn-lg btn-sm rounded-pill" style={{ width: "100%" }} onClick={handleLogin}>
                    Continue
                  </button> */}
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
