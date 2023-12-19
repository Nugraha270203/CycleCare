import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homeld from "../component/home/home";
import footer from "../assets/footer.png";
import foto from "../assets/foto.png";
import Aboute from "../component/home/aboute";
import Nabarlandingpage from "../component/navbarlandingpage";
import Fitur from "../component/home/fitur";
import Article from "../component/home/article";
import Footer from "../component/Footer";
import Testimoni from "../component/testimoni";
function LandingPage() {


  return (
    <>

      <Nabarlandingpage />
      <Homeld />
      <Aboute />
      <Fitur />
      <Article />
<Testimoni />
      <Footer />


    </>
  );
}

export default LandingPage;
