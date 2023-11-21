import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../component/navbar";
import mobile from "../assets/mobile.png";
function Regis() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div class="text-danger ">Register</div>
                <div class="text-lg-left"><p> Join our community today! Create an account</p>
                <p> to unlock exclusive features</p> 
                <p>and personalized experiences..</p></div>
                <div class="text-lg-left">
                    <img src={mobile} alt="" style={{
                        width: "200px",
                        height: "auto",
                        position: "relative"
                    }
                    }/>
                </div>
            </div>
            <div className="container center-container">
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" id="namaf" placeholder="Enter First Name" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="namal" placeholder="Enter Last Name" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="email" placeholder="Enter Email" />
                </div>
                <div className="form-group md-8">
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="form-group text-center">
                    <button type="button" className="btn btn-danger btn-lg btn-sm rounded-pill" style={{ width: '63%' }}>Register</button>
                </div>
                <div class="form-group text-center">
                    Already have an account?
                    <a href="/login" >Sign in</a>
                </div>
            </form>
        </div>       

        </>
    );
}
export default Regis;