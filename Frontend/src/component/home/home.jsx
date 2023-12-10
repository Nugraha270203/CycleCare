import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgcustom from "../../assets/bgcustom.png";

// Homeld Component
function Homeld() {
    return (
        <div id="Home" className="container-fluid px" style={{ paddingTop: "20px", paddingLeft: "0px", paddingRight: "0px", marginBottom: "0px" }}>
            <div className="landing-section mt-5">
                <img src={bgcustom} alt="" style={{ width: "100%", height: "auto", position: "relative" }} />
            </div>
        </div>
    );
}
export default Homeld;
