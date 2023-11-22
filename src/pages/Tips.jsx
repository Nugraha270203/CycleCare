import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarlogin from "../component/Navbarlogin";
import Footer from "../component/Footer";


function Tips() {
    return (
        <>
            <Navbarlogin />
            <section>
                <div className="container">
                    <br />
                    <br />
                    <div style={{fontSize:"25px", marginLeft:"100px", marginBottom:"5px", fontWeight:"600"}}>
                        Tips & Tutorial
                    </div>
                    <div style={{marginLeft:"100px"}}>
                        Ayo lihat video tips & tutorial yang kami sediakan!  
                    </div>
                    <div style={{marginTop:"20px", marginLeft:"170px"}}>
                        <div>
                            <a href="/Video" >
                                <img src="/src/assets/tips.png" alt="tips" style={{width:"200px", marginRight:"10px"}} />
                            </a>
                            <a href="/Video" >
                                <img src="/src/assets/tips.png" alt="tips" style={{width:"200px", marginRight:"10px"}} />
                            </a><a href="#" >
                                <img src="/src/assets/tips.png" alt="tips" style={{width:"200px", marginRight:"10px"}} />
                            </a><a href="#" >
                                <img src="/src/assets/tips.png" alt="tips" style={{width:"200px"}} />
                            </a>
                        </div>
                    </div>
                    <div style={{marginTop:"20px", marginLeft:"170px"}}>
                            <a href="#" >
                                <img src="/src/assets/tips.png" alt="tips" style={{width:"200px", marginRight:"10px"}} />
                            </a>
                            <a href="#" >
                                <img src="/src/assets/tips.png" alt="tips" style={{width:"200px", marginRight:"10px"}} />
                            </a>
                            <a href="#" >
                                <img src="/src/assets/tips.png" alt="tips" style={{width:"200px", marginRight:"10px"}} />
                            </a>
                            <a href="#" >
                                <img src="/src/assets/tips.png" alt="tips" style={{width:"200px"}} />
                            </a>
                    </div>
                    <div style={{marginTop:"20px", marginLeft:"170px"}}>
                            <a href="#" >
                                <img src="/src/assets/tips.png" alt="tips" style={{width:"200px", marginRight:"10px"}} />
                            </a>
                            <a href="#" >
                                <img src="/src/assets/tips.png" alt="tips" style={{width:"200px", marginRight:"10px"}} />
                            </a>
                            <a href="#" >
                                <img src="/src/assets/tips.png" alt="tips" style={{width:"200px", marginRight:"10px"}} />
                            </a>
                            <a href="#" >
                                <img src="/src/assets/tips.png" alt="tips" style={{width:"200px"}} />
                            </a>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    );
}
export default Tips;