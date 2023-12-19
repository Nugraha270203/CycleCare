import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import foto from "../../assets/foto.png";
function Article() {


  return (
    <>
      
        <div id="Article" className="container-fluid" style={{ padding: 0 }}>
          <div
            className="landing-section"
            style={{ minHeight: "100vh" }}
          >
            <div className="text-center mx-auto">
              <br />
              <br />
              <br />
          <h1 className="mt-5 mb-3 text-center" style={{ borderBottom: "3px solid red", margin: "0 auto", width: "50px" }}></h1>

              <h1
                className="text-black fw-bold"
                
              >
                Maintenance Contents
              </h1>
              <h4>Articles</h4>

              <div className="d-flex justify-content-center mt-3">
                <div className="d-flex">
                  <Link to="/Article" style={{ textDecoration: "none" }}>
                    <div className="card shadow  mt-5 mb-5 rounded-4 " style={{ width: "20rem" }}>
                      <img
                        src={foto}
                        className="card-img-top img-fluid rounded-top-4 "
                        alt="..."
                      />
                      <div className="card-body">
                        <p className="card-text text-start fw-bold">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link to="/Article" style={{ textDecoration: "none" }}>

                    <div
                      className="card shadow mt-5  mb-5 mx-5 rounded-4"
                      style={{ width: "20rem" }}
                    >
                      <img
                        src={foto}
                        className="card-img-top img-fluid rounded-top-4"
                        alt="..."
                      />
                      <div className="card-body">
                        <p className="card-text text-start fw-bold">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link to="/Article" style={{ textDecoration: "none" }}>

                    <div
                      className="card shadow  mt-5   mb-5 rounded-4"
                      style={{ width: "20rem" }}
                    >
                      <img
                        src={foto}
                        className="card-img-top img-fluid rounded-top-4"
                        alt="..."
                      />
                      <div className="card-body">
                        <p className="card-text text-start fw-bold">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>

        

    </>
  );
}

export default Article;
