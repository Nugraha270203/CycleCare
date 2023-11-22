import React from "react";
import footer from "../assets/footer.png"

function Footer(){
    return(
        <>
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
    )
}

export default Footer;