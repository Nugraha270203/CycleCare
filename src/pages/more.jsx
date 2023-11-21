import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../component/navbar";
import About2 from "../assets/About2.png";
import footer from "../assets/footer.png"
function More() {
  return (
    <>
      <Navbar />
      <div className="container-fluid mb-5">
        <div className="text-center">
          <img className="mt-5"
            src={About2}
            alt=""
            style={{ width: "900px", height: "auto", position: "relative" }}
          />
        </div>
      </div>
      <div id="footer" className="container-fluid" style={{ padding: 0 }}>
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
export default More;
