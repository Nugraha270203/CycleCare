import React from "react";
import Navbarlogin from "../component/Navbarlogin";
import jirigen from "../assets/jirigen.png"
function Menuarticle() {
    return (
        <>
            <Navbarlogin />
            <div className="container">
                <div className="container-fluid">
                    <h2 className="mt-5 fw-bold">Article</h2>
                    <p style={{ fontSize: "25px" }}> Yuk baca artikel untuk menambah wawasan kamu!</p>
                    <div className="d-flex justify-content-center">
                        <div class="card" >
                            <div class="card-body">
                                <div className="row">
                                    <div className="col-md-10">
                                    <h5 class="card-title mt-3 shadow-lg">Nah, apa kiranya cara yang tepat untuk merawat motor jenis ini? Simak tips selengkapnya di ulasan berikut yang sudah kami rangkum dari berbagai sumber terpercaya</h5>
                                    </div>
                                    <div className="col">
                                        <img src={jirigen} alt="" style={{width:"80px", height:"auto"}}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Menuarticle;