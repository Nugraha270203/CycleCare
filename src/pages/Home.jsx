import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../component/navbar";
import "./index.css";
import bgcustom from "../assets/bgcustom.png"
function Home() {
    return (
      <>
      <Navbar />
      <div className="container">
        <img src={bgcustom} alt="" />
      </div>
      </>
    );
  }

export default Home;