import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../component/navbar";
import phone from "../assets/phone.png";
import Bodi from "../component/Bodi";
function Login() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div class="text-danger text-lg-center">Login</div>
                <div class="text-lg-center"><p> Welcome Back! Please Log in to access your account.</p></div>
                <div class="text-lg-center">
                    <img src={phone} alt="" />
                </div>
            </div>
           <Bodi />
        </>
    );
}
export default Login;