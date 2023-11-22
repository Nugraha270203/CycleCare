import React from "react";
import Navbarlogin from "../component/Navbarlogin";
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
                                <h5 class="card-title">Card title</h5>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Menuarticle;