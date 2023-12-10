import React from "react";
import logo from "../assets/logo.png"
import Facebook from "../assets/Facebook.png"
import Linkedin from "../assets/Linkedin.png"
import telegram from "../assets/telegram.png"
import Instagram from "../assets/Instagram.png"

function Footer() {
  return (
    <>
      <div id="footer" className="container-fluid mt-5" style={{ padding: 0, backgroundColor: "#FFE8E8" }}>
        <div className="landing-section">
          <div className="container d-flex flex-column align-items-center">
            <img className="mt-3" src={logo} alt="" style={{ width: "15%", height: "auto", position: "relative" }} />
            <p className="mt-3 text-center" style={{ width: "500px" }}>We help manage maintenance schedules and provide important information about your motorcycle</p>
            <div className=" d-flex justify-content-center align-items-center">
              <a href="">
                <img className="mt-3" src={Facebook} alt="" style={{ width: "80%", height: "auto", position: "relative" }} />
              </a>
              <a href="">
                <img className="mt-3" src={Linkedin} alt="" style={{ width: "80%", height: "auto", position: "relative" }} />
              </a>
              <a href="">
                <img className="mt-3" src={telegram} alt="" style={{ width: "80%", height: "auto", position: "relative" }} />
              </a>
              <a href="">
                <img className="mt-3 " src={Instagram} alt="" style={{ width: "80%", height: "auto", position: "relative" }} />
              </a>
            </div>
            <p className="mt-4">© 2023 Copyright by Mabar Developers. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
