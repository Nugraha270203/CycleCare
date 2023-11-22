import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarlogin from "../component/Navbarlogin";
import Footer from "../component/Footer";


function Komunitas() {
    return (
        <>
            <Navbarlogin />
            <section style={{marginLeft:"100px"}}>
                <div className="container">
                    <br />
                    <br />
                    <div style={{fontSize:"10px", marginLeft:"100px", fontWeight:"500"}}>
                        <img src="/src/assets/logo.svg" alt="logo" className="mx-5"
                        style={{ width: "100px", marginBottom:"5px"}} /> 2 Minggu yang lalu
                    </div>
                    <div style={{fontSize:"18px", marginLeft:"170px", marginBottom:"10px", fontWeight:"600"}}>
                        Kemarin sore Honda telah menerbitkan variant Vario baru . . .
                    </div>
                    <div>
                        <img src="/src/assets/post1.png" alt="post"
                            style={{ width: "700px", marginLeft:"140px" }} />
                    </div>
                <div className="komen" style={{ width: "695px", marginLeft: "142px", marginTop: "15px" }}>
                <div style={{ position: "relative", display: "flex" }}>
                    <input
                    style={{ border: "1px solid black", flex: 1 }}
                    type="password"
                    className="form-control text-left"
                    id="Password"
                    placeholder="Komentar Anda"
                    />
                      <a href="#" style={{ position: "absolute", right: "15%", top: "50%", transform: "translateY(-52%)" }}>
                         <img src="/src/assets/emoji.png" alt="emoji" style={{ width: "25px" }} />
                      </a>
                    <a href="#"><button class="btn btn-danger" style={{borderRadius:"10px",width:"85px", marginLeft:"10px" }}>Kirim</button></a>
                </div>
                </div>    
                </div>

                <div className="container">
                    <br />
                    <br />
                    <div style={{fontSize:"10px", marginLeft:"100px", fontWeight:"500"}}>
                        <img src="/src/assets/komu1.png" alt="logo" className="mx-5"
                        style={{ width: "100px", marginBottom:"5px"}} /> 3 Minggu yang lalu
                    </div>
                    <div style={{fontSize:"18px", marginLeft:"170px", marginBottom:"10px", fontWeight:"600"}}>
                        Motorku encok guyss :D
                    </div>
                    <div>
                        <img src="/src/assets/post2.png" alt="post"
                            style={{ width: "700px", marginLeft:"140px" }} />
                    </div>
                <div className="komen" style={{ width: "695px", marginLeft: "142px", marginTop: "15px" }}>
                <div style={{ position: "relative", display: "flex" }}>
                    <input
                    style={{ border: "1px solid black", flex: 1 }}
                    type="password"
                    className="form-control text-left"
                    id="Password"
                    placeholder="Komentar Anda"
                    />
                      <a href="#" style={{ position: "absolute", right: "15%", top: "50%", transform: "translateY(-52%)" }}>
                         <img src="/src/assets/emoji.png" alt="emoji" style={{ width: "25px" }} />
                      </a>
                    <a href="#"><button class="btn btn-danger" style={{borderRadius:"10px",width:"85px", marginLeft:"10px" }}>Kirim</button></a>
                </div>
                </div>    
                </div>

                
            </section>
            <Footer />
        </>
    );
}
export default Komunitas;