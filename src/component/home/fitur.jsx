import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import fitur from "../../assets/fitur.png";

function Fitur() {


  return (
    <>

        <div id="Fitur" className="container-fluid" style={{ padding: 0 }}>
          <div className="landing-section">
            <img
              src={fitur}
              alt=""
              style={{ width: "100%", height: "auto", position: "relative" }}
            />
          </div>
        </div>
        </>
  )
}
export default Fitur;