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
                    <div>
                        <img src="/src/assets/video.png" alt="logo" className="mx-5"
                        style={{ width: "600px", marginBottom:"5px"}} />
                    </div>
                    <div style={{fontSize:"22px", marginLeft:"50px", marginBottom:"2px", fontWeight:"600", marginTop:"3px"}}>
                    Cara menentukan oli yang baik dan benar
                    </div>
                    <div style={{fontSize:"15px", marginLeft:"50px", marginBottom:"10px", marginTop:"3px", color:"#AEB1C1"}}>
                    Youtube - UdinYT
                    </div>
                    <div style={{marginLeft:"50px" ,backgroundColor:"#C9C9C9",color:"white" , width:"125px",height:"30px" ,borderRadius:"40px" , display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <a href="#">
                            <img src="/src/assets/like.png" alt="like" style={{width:"20px",marginLeft:"10px", marginRight:"5px"}} /> 
                        </a>
                       999
                       <div style={{marginLeft:"10px",marginBottom:"10px",marginRight:"8px", fontSize:"38px"}}>|</div>
                        <a href="#"><img src="/src/assets/dislike.png" alt="dislike" style={{width:"20px",marginRight:"20px"}} />
                        </a>
                        
                    </div>
                    </div>
            </section>
            <Footer />
        </>
    );
}
export default Video;