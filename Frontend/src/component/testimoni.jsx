import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import sinta from '../assets/sinta.jpg';
import bintang5 from "../assets/bintang5.png"
import kutip1 from "../assets/kutip1.png"
import kutip2 from "../assets/kutip2.png"


const Testimoni = () => {

    return (
        <div id="carouselExample" className="carousel slide mx-auto" style={{ width: "80%", height: "auto" }}>

            <h1 className="mt-5 text-center" style={{ borderBottom: "3px solid #F76680", margin: "0 auto", width: "50px" }}></h1>
            <h1 className="mt-3 text-center"> Why user love</h1>
            <h4 className="text-center mb-5">Our feature</h4>
            <br />
            <br />
            <div className="carousel-inner mb-5  ">
                <div className="carousel-item ">
                    <h6 className="w-50 text-center mx-auto">
                        <img src={kutip1} alt="" style={{ width: "20px", height: "auto" }} />
                        Without any doubt I recommend CycleCare Solutions as one of the best web design and application mobile. One of the best platforms I’ve came across so far. Wouldn’t be hesitated to introduce their app to someone else.
                        <img src={kutip2} alt="" style={{ width: "20px", height: "auto" }} />

                    </h6>
                </div>
                <div className="carousel-item ">
                    <h6 className="w-50 text-center mx-auto">
                        <img src={kutip1} alt="" style={{ width: "20px", height: "auto" }} />
                        Without any doubt I recommend CycleCare Solutions as one of the best web design and application mobile. One of the best platforms I’ve came across so far. Wouldn’t be hesitated to introduce their app to someone else.
                        <img src={kutip2} alt="" style={{ width: "20px", height: "auto" }} />

                    </h6>
                </div>
                <div className="carousel-item active">
                    <h6 className="w-50 text-center mx-auto">
                        <img src={kutip1} alt="" style={{ width: "20px", height: "auto" }} />
                        Without any doubt I recommend CycleCare Solutions as one of the best web design and application mobile. One of the best platforms I’ve came across so far. Wouldn’t be hesitated to introduce their app to someone else.
                        <img src={kutip2} alt="" style={{ width: "20px", height: "auto" }} />

                    </h6>
                </div>
                {/* Add more carousel items as needed */}
                <div className="carousel-item ">
                    <h6 className="w-50 text-center mx-auto">
                        <img src={kutip1} alt="" style={{ width: "20px", height: "auto" }} />
                        Without any doubt I recommend CycleCare Solutions as one of the best web design and application mobile. One of the best platforms I’ve came across so far. Wouldn’t be hesitated to introduce their app to someone else.
                        <img src={kutip2} alt="" style={{ width: "20px", height: "auto" }} />

                    </h6>
                </div>
                <div className="carousel-item ">
                    <h6 className="w-50 text-center mx-auto">
                        <img src={kutip1} alt="" style={{ width: "20px", height: "auto" }} />
                        Without any doubt I recommend CycleCare Solutions as one of the best web design and application mobile. One of the best platforms I’ve came across so far. Wouldn’t be hesitated to introduce their app to someone else.
                        <img src={kutip2} alt="" style={{ width: "20px", height: "auto" }} />

                    </h6>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <ol className="carousel-indicators" style={{ listStyle: 'none' }}>
                <li className='mx-5' >
                    <div className='text-center'>
                        <img data-bs-target="#carouselExample" data-bs-slide-to="0" src={sinta} alt="" style={{ width: "100px", height: "100px" }} />
                        <img src={bintang5} alt="" style={{ width: "110px", height: "auto", borderRadius: "0%" }} />
                        <p className="fw-bold">Imran khan</p>
                        <p>Software Enginer</p>
                    </div>
                </li>
                <li className='mx-5'>
                    <div className='text-center'>

                        <img data-bs-target="#carouselExample" data-bs-slide-to="1" src={sinta} alt="" style={{ width: "100px", height: "100px" }} />
                        <img src={bintang5} alt="" style={{ width: "110px", height: "auto", borderRadius: "0%" }} />
                        <p className="fw-bold">Imran khan</p>
                        <p>Software Enginer</p>
                    </div>

                </li>
                <li className='mx-5'>
                    <div className='text-center'>

                        <img data-bs-target="#carouselExample" data-bs-slide-to="2" className="active" src={sinta} alt="" style={{ width: "100px", height: "100px" }} />
                        <img src={bintang5} alt="" style={{ width: "110px", height: "auto", borderRadius: "0%" }} />
                        <p className="fw-bold">Imran khan</p>
                        <p>Software Enginer</p>
                    </div>
                </li>
                <li className='mx-5' >
                    <div className='text-center'>
                        <img data-bs-target="#carouselExample" data-bs-slide-to="3" src={sinta} alt="" style={{ width: "100px", height: "100px" }} />
                        <img src={bintang5} alt="" style={{ width: "110px", height: "auto", borderRadius: "0%" }} />
                        <p className="fw-bold">Imran khan</p>
                        <p>Software Enginer</p>
                    </div>
                </li>
                <li className='mx-5' >
                    <div className='text-center'>
                        <img data-bs-target="#carouselExample" data-bs-slide-to="4" src={sinta} alt="" style={{ width: "100px", height: "100px" }} />
                        <img src={bintang5} alt="" style={{ width: "110px", height: "auto", borderRadius: "0%" }} />
                        <p className="fw-bold">Imran khan</p>
                        <p>Software Enginer</p>
                    </div>
                </li>

            </ol>
        </div>
    );
};

export default Testimoni;
