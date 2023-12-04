import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import fitur from "../../assets/fitur1.png";
import fitur2 from "../../assets/fitur2.png"
import fitur3 from "../../assets/fitur3.png"

function Fitur() {


  return (
    <>

      <div id="Fitur" className="container-fluid" style={{ padding: 0 }}>
        <div className="landing-section">
          <br />
          <br />
          <br />
          <h1 className="mt-5 text-center" style={{ borderBottom: "3px solid red", margin: "0 auto", width: "50px" }}></h1>
          <h1 className="mt-3 text-center"> Our Features</h1>
          <h4 className="text-center">We Offer</h4>
          <br />
          <br />
          <div className="card mx-auto mt-3 mb-3" style={{ maxWidth: "80%", borderRadius: "15px", border:"none" }}>
            <div className="row no-gutters">
              <div className="col-md-6" style={{ backgroundColor: "#C53938", padding: "20px", borderRadius: "15px 0 0 15px" }}>
                <img src={fitur} alt="" style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="col-md-6" style={{ backgroundColor: "rgba(197, 57, 56, 0.5)", padding: "20px", borderRadius: "0 15px 15px 0" }}>
                <blockquote className="blockquote mb-0">
                  <br /><br />
                  <h4 className="fw-bold">Content Video and Article</h4>
                  <p className="mt-4">Guide in the form of articles and video
                    tutorials to help you service your
                    motorbike independently.</p>
                    <br />
                    <br />
                    <br />
                    <br />
                <p className="fs-6 text-end fw-bold">Read more  </p>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="card mx-auto mb-3" style={{ maxWidth: "80%", borderRadius: "15px", border:"none"  }}>
            <div className="row no-gutters">
              <div className="col-md-6" style={{ backgroundColor: "#F8AD2E", padding: "20px", borderRadius: "15px 0 0 15px" }}>
              <img src={fitur2} alt="" style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="col-md-6" style={{ backgroundColor: "rgba(248, 173, 46, 0.5)", padding: "20px", borderRadius: "0 15px 15px 0" }}>
                <blockquote className="blockquote mb-0">
                <br /><br />
                  <h4 className="fw-bold">Schedule Reminder</h4>
                  <p className="mt-4">Get notifications that help you remember your motorbike service schedule.</p>
                    <br />
                    <br />
                    <br />
                    <br />
                <p className="fs-6 text-end fw-bold">Read more  </p>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="card mx-auto  mb-4" style={{ maxWidth: "80%", borderRadius: "15px", border:"none"  }}>
            <div className="row no-gutters">
              <div className="col-md-6" style={{ backgroundColor: "#C4C4C4", padding: "20px", borderRadius: "15px 0 0 15px" }}>
              <img src={fitur3} alt="" style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="col-md-6" style={{ backgroundColor: "rgba(196, 196, 196, 0.5)", padding: "20px", borderRadius: "0 15px 15px 0" }}>
                <blockquote className="blockquote mb-0">
                <br /><br />
                  <h4 className="fw-bold">Discuss Immunity</h4>
                  <p className="mt-4">Active community to share experiences and knowledge</p>
                    <br />
                    <br />
                    <br />
                    <br />
                <p className="fs-6 text-end fw-bold">Read more  </p>
                </blockquote>
              </div>
            </div>
          </div>


        </div>
      </div>


    </>
  )
}
export default Fitur;