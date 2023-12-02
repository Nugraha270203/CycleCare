import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarlogin from "../component/Navbarlogin";
import Footer from "../component/Footer";


function Video() {
    return (
        <>
            <Navbarlogin />
            <section>
                <div className="container">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-8">
                            <iframe width="750" height="390" src="https://www.youtube.com/embed/lCaADF4VjYA?si=FLPR0LyGN6II4Cb-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="col-3">
                            <div class="card shadow" style={{ width: "25rem", marginLeft: "15px" }}>
                                <div class="card-body">
                                    <div className="">
                                        <div className="row">
                                            <div className="col-5 mt-auto">
                                                <h5 class="card-title text-danger">Rekomendasi</h5>
                                            </div>
                                            <div className="col-7 ">
                                                <h1 className="mt-3" style={{borderBottom:"2px solid red " ,width:"200px"}}> </h1>
                                            </div>
                                        </div>
                                        <div className=" mb-3">
                                            <h5 class="card-title">Card title</h5>
                                            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                        <div className="mb-3">
                                            <h5 class="card-title">Card title</h5>
                                            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
export default Video;