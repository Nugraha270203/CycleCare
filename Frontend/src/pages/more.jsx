import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../component/navbar";
import About2 from "../assets/About2.png";
import footer from "../assets/footer.png"
import Footer from "../component/Footer";
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
     <Footer />
    </>
  );
}
export default More;
