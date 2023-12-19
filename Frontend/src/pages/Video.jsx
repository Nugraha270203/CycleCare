import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarlogin from "../component/Navbarlogin";
import Footer from "../component/Footer";
import videolain1 from "../assets/videolain1.png";
import artikellainnya1 from "../assets/artikellainnya1.png";
import artikellainnya2 from "../assets/artikellainnya2.png";
import artikellainnya3 from "../assets/artikellainnya3.png";
import v1 from "../assets/v1.png";
import v2 from "../assets/v2.png";
import v3 from "../assets/v3.png";
import v4 from "../assets/v4.png";
import v5 from "../assets/v5.png";
import v6 from "../assets/v6.png";


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
                            <iframe width="750" height="390" src="https://www.youtube.com/embed/lCaADF4VjYA?si=FLPR0LyGN6II4Cb-" title="YouTube Video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <p style={{ fontWeight: "700", fontSize: "25px"}} >Tips dan cara ganti oli motor matic || Beat,vario, Scoopy </p>
                            <br />
                            <div class="card shadow" style={{ width: "47rem", height:"100px", }}>
                                <h5 class="card-title" style={{ fontWeight: "700", fontSize: "15px", marginLeft:"10px", marginTop:"10px"}} >Description</h5>
                                <p class="card-text" style={{ fontWeight: "500", fontSize: "10px", marginLeft:"10px"}}>Simak videonya sampai tuntas, supaya mesin motor metic kalian awet, terjaga, dan tahan lama. Berlaku utk semua motor metic HONDA. Utk motor metic YAMAHA, Suzuki dll, sebaiknya konsultasi dulu kepada bengkel resmi nya, mengenai ketahanan oli masing masing bawaan motor nya!.Tetapi utk cara ganti, dan tutorial nya sama ya.. Terimakasih, selamat mengikuti.semoga motor nya sehat awet dan terhindar dari kendala.</p>
                            </div>
                            <br />
                            <div className="col-3">
                            <div class="card shadow" style={{ width: "47rem"}}>
                                <div class="card-body">
                                    <div className="">
                                        <div className="row">
                                            <div className="col-3 mt-auto">
                                                <h5 class="card-title text-danger">Video Lainnya</h5>
                                            </div>
                                            <div className="col-2 ">
                                                <h1 className="mt-3" style={{borderBottom:"2px solid red " ,width:"528px"}}> </h1>
                                            </div>
                                        </div>
                                    <div>
                                        <div style={{display:"flex"}}>
                                            <div class="card shadow" style={{ width: "350px", borderRadius:"10px", marginTop:"20px", marginRight:"20px"}}>
                                                <div className=" mb-0" >
                                                    <div class="card mb-0">
                                                        <a href=""><img style={{width:"224px", height:"auto", marginBottom:"0px"}} src={v1} class="card-img-top" alt="lainnya"/></a>
                                                            <a style={{textDecoration:"none", color:"#000000"}} href="">
                                                            <div class="card-body">
                                                                <h5 class="card-title" style={{ fontWeight: "700", fontSize: "15px"}} >Cara menjaga mesin motor anda agar tetap awet</h5>
                                                                <p class="card-text" style={{ fontWeight: "500", fontSize: "10px"}} ><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                                            </div>
                                                            </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card shadow" style={{ width: "350px", borderRadius:"10px", marginTop:"20px", marginRight:"20px"}}>
                                                <div className=" mb-0" >
                                                    <div class="card mb-0">
                                                        <a href=""><img style={{width:"224px", height:"auto", marginBottom:"0px"}} src={v2} class="card-img-top" alt="lainnya"/></a>
                                                            <a style={{textDecoration:"none", color:"#000000"}} href="">
                                                            <div class="card-body">
                                                                <h5 class="card-title" style={{ fontWeight: "700", fontSize: "15px"}} >Cara merawat motor agar tetap mengkilap...</h5>
                                                                <p class="card-text" style={{ fontWeight: "500", fontSize: "10px"}} ><small class="text-body-secondary">Last updated 2 days ago</small></p>
                                                            </div>
                                                            </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card shadow" style={{ width: "350px", borderRadius:"10px", marginTop:"20px"}}>
                                                <div className=" mb-0" >
                                                    <div class="card mb-0">
                                                        <a href=""><img style={{width:"224px", height:"auto", marginBottom:"0px"}} src={v3} class="card-img-top" alt="lainnya"/></a>
                                                            <a style={{textDecoration:"none", color:"#000000"}} href="">
                                                            <div class="card-body">
                                                                <h5 class="card-title" style={{ fontWeight: "700", fontSize: "15px"}} >Cara menentukan oli yang cocok untuk motor anda</h5>
                                                                <p class="card-text" style={{ fontWeight: "500", fontSize: "10px"}} ><small class="text-body-secondary">Last updated 6 days ago</small></p>
                                                            </div>
                                                            </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                    <div>
                                    <div style={{display:"flex", marginBottom:"50px"}}>
                                            <div class="card shadow" style={{ width: "350px", borderRadius:"10px", marginTop:"20px", marginRight:"20px"}}>
                                                <div className=" mb-0" >
                                                    <div class="card mb-0">
                                                        <a href=""><img style={{width:"224px", height:"auto", marginBottom:"0px"}} src={v4} class="card-img-top" alt="lainnya"/></a>
                                                            <a style={{textDecoration:"none", color:"#000000"}} href="">
                                                            <div class="card-body">
                                                                <h5 class="card-title" style={{ fontWeight: "700", fontSize: "15px"}} >Cara mengganti filter udara</h5>
                                                                <p class="card-text" style={{ fontWeight: "500", fontSize: "10px"}} ><small class="text-body-secondary">Last updated 1 weeks ago</small></p>
                                                            </div>
                                                            </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card shadow" style={{ width: "350px", borderRadius:"10px", marginTop:"20px", marginRight:"20px"}}>
                                                <div className=" mb-0" >
                                                    <div class="card mb-0">
                                                        <a href=""><img style={{width:"224px", height:"auto", marginBottom:"0px"}} src={v5} class="card-img-top" alt="lainnya"/></a>
                                                            <a style={{textDecoration:"none", color:"#000000"}} href="">
                                                            <div class="card-body">
                                                                <h5 class="card-title" style={{ fontWeight: "700", fontSize: "15px"}} >Cara atasi ban tubeless yang nyoplok</h5>
                                                                <p class="card-text" style={{ fontWeight: "500", fontSize: "10px"}} ><small class="text-body-secondary">Last updated 2 weeks ago</small></p>
                                                            </div>
                                                            </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card shadow" style={{ width: "350px", borderRadius:"10px", marginTop:"20px"}}>
                                                <div className=" mb-0" >
                                                    <div class="card mb-0">
                                                        <a href=""><img style={{width:"224px", height:"auto", marginBottom:"0px"}} src={v6} class="card-img-top" alt="lainnya"/></a>
                                                            <a style={{textDecoration:"none", color:"#000000"}} href="">
                                                            <div class="card-body">
                                                                <h5 class="card-title" style={{ fontWeight: "700", fontSize: "15px"}} >Cara mengencangkan rantai motor yang kendur</h5>
                                                                <p class="card-text" style={{ fontWeight: "500", fontSize: "10px"}} ><small class="text-body-secondary">Last updated 2 weeks ago</small></p>
                                                            </div>
                                                            </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                        
                                       
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div class="card shadow" style={{ width: "26rem", marginLeft: "10px"}}>
                                <div class="card-body">
                                    <div className="">
                                        <div className="row">
                                            <div className="col-5 mt-auto">
                                                <h5 class="card-title text-danger">Rekomendasi</h5>
                                            </div>
                                            <div className="col-7 ">
                                                <h1 className="mt-3" style={{borderBottom:"2px solid red " ,width:"210px"}}> </h1>
                                            </div>
                                        </div>
                                        <div className=" mb-0" >
                                                <div className="col-7" style={{ display:"flex" }}>
                                                    <a href="https://youtu.be/-2FNf2RO9tI?si=-xAwnMzO3zMR7A3y"><img style={{width:"178px", height:"auto", borderRadius:"10px", marginTop:"18px"}} src={videolain1} alt="video" /></a>
                                                    <div class="col-md-12">
                                                        <a style={{textDecoration:"none", color:"#000000"}} href="https://youtu.be/-2FNf2RO9tI?si=-xAwnMzO3zMR7A3y">
                                                        <div class="card-body">
                                                            <h5 class="card-title" style={{ fontWeight: "700", fontSize: "15px"}}> Cara Mengecek Aki Motor Masih Bagus Atau Rusak Dengan 3 Cara</h5>
                                                            <p class="card-text" style={{fontWeight: "500", fontSize: "10px"}}>Video kali ini cara cek aki motor masih bagus atau tidak. Cara cek aki sepeda motor...</p>
                                                        </div>
                                                        </a>
                                                        </div>
                                                </div>
                                                <div className="col-7 ">
                                                    <h1 className="mt-3" style={{borderBottom:"2px solid #979797 " ,width:"380px"}}> </h1>
                                                </div>
                                                <div className="col-7" style={{ display:"flex" }}>
                                                    <a href="https://youtu.be/-2FNf2RO9tI?si=-xAwnMzO3zMR7A3y"><img style={{width:"178px", height:"auto", borderRadius:"10px", marginTop:"18px"}} src={videolain1} alt="video" /></a>
                                                    <div class="col-md-12">
                                                        <a style={{textDecoration:"none", color:"#000000"}} href="https://youtu.be/-2FNf2RO9tI?si=-xAwnMzO3zMR7A3y">
                                                        <div class="card-body">
                                                            <h5 class="card-title" style={{ fontWeight: "700", fontSize: "15px"}}> Cara Mengecek Aki Motor Masih Bagus Atau Rusak Dengan 3 Cara</h5>
                                                            <p class="card-text" style={{fontWeight: "500", fontSize: "10px"}}>Video kali ini cara cek aki motor masih bagus atau tidak. Cara cek aki sepeda motor...</p>
                                                        </div>
                                                        </a>
                                                        </div>
                                                </div>
                                                <div className="col-7 ">
                                                    <h1 className="mt-3" style={{borderBottom:"2px solid #979797 " ,width:"380px"}}> </h1>
                                                </div>
                                                <div className="col-7" style={{ display:"flex" }}>
                                                    <a href="https://youtu.be/-2FNf2RO9tI?si=-xAwnMzO3zMR7A3y"><img style={{width:"178px", height:"auto", borderRadius:"10px", marginTop:"18px"}} src={videolain1} alt="video" /></a>
                                                    <div class="col-md-12">
                                                        <a style={{textDecoration:"none", color:"#000000"}} href="https://youtu.be/-2FNf2RO9tI?si=-xAwnMzO3zMR7A3y">
                                                        <div class="card-body">
                                                            <h5 class="card-title" style={{ fontWeight: "700", fontSize: "15px"}}> Cara Mengecek Aki Motor Masih Bagus Atau Rusak Dengan 3 Cara</h5>
                                                            <p class="card-text" style={{fontWeight: "500", fontSize: "10px"}}>Video kali ini cara cek aki motor masih bagus atau tidak. Cara cek aki sepeda motor...</p>
                                                        </div>
                                                        </a>
                                                        </div>
                                                </div>
                                                <div className="col-7 ">
                                                    <h1 className="mt-3" style={{borderBottom:"2px solid #979797 " ,width:"380px"}}> </h1>
                                                </div>
                                                <div className="col-7" style={{ display:"flex" }}>
                                                    <a href="https://youtu.be/-2FNf2RO9tI?si=-xAwnMzO3zMR7A3y"><img style={{width:"178px", height:"auto", borderRadius:"10px", marginTop:"18px"}} src={videolain1} alt="video" /></a>
                                                    <div class="col-md-12">
                                                        <a style={{textDecoration:"none", color:"#000000"}} href="https://youtu.be/-2FNf2RO9tI?si=-xAwnMzO3zMR7A3y">
                                                        <div class="card-body">
                                                            <h5 class="card-title" style={{ fontWeight: "700", fontSize: "15px"}}> Cara Mengecek Aki Motor Masih Bagus Atau Rusak Dengan 3 Cara</h5>
                                                            <p class="card-text" style={{fontWeight: "500", fontSize: "10px"}}>Video kali ini cara cek aki motor masih bagus atau tidak. Cara cek aki sepeda motor...</p>
                                                        </div>
                                                        </a>
                                                        </div>
                                                </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                        <div className="col-3">
                            <div class="card shadow" style={{ width: "26rem", marginLeft: "10px"}}>
                                <div class="card-body">
                                    <div className="">
                                        <div className="row">
                                            <div className="col-5 mt-auto">
                                                <h5 class="card-title text-danger">Baca Artikel</h5>
                                            </div>
                                            <div className="col-7 ">
                                                <h1 className="mt-3" style={{borderBottom:"2px solid red " ,width:"210px"}}> </h1>
                                            </div>
                                        </div>
                                        <div className=" mb-0" >
                                                <div className="col-7" style={{ display:"flex" }}>
                                                    <a href="#"><img style={{width:"178px", height:"auto", borderRadius:"10px", marginTop:"15px"}} src={artikellainnya1} alt="Artikel" /></a>
                                                    <div class="col-md-12">
                                                        <a style={{textDecoration:"none", color:"#000000"}} href="">
                                                        <div class="card-body">
                                                            <h5 class="card-title" style={{ fontWeight: "700", fontSize: "15px"}}> Turorial membuat laci mini dari kardus</h5>
                                                            <p class="card-text" style={{fontWeight: "500", fontSize: "10px"}}>Alat & Bahan :
                                                            <p>• Kardus susu Sustagen 
                                                            <p>• Gunting...</p>
                                                            </p>
                                                            </p>
                                                        </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-7 ">
                                                    <h1 className="mt-1" style={{borderBottom:"2px solid #979797 " ,width:"380px"}}> </h1>
                                                </div>
                                                <div className="col-7" style={{ display:"flex" }}>
                                                    <a href="#"><img style={{width:"178px", height:"auto", borderRadius:"10px", marginTop:"15px"}} src={artikellainnya2} alt="Artikel" /></a>
                                                    <div class="col-md-12">
                                                        <a style={{textDecoration:"none", color:"#000000"}} href="">
                                                        <div class="card-body">
                                                            <h5 class="card-title" style={{ fontWeight: "700", fontSize: "15px"}}> Begini cara memanfaatkan sampah organik...</h5>
                                                            <p class="card-text" style={{fontWeight: "500", fontSize: "10px"}}>Mengolah sampah organik dapat meningkatkan lingkungan yang bersih, dan dapat dimanfaatkan...</p>
                                                        </div>
                                                        </a>
                                                        </div>
                                                </div>
                                                <div className="col-7 ">
                                                    <h1 className="mt-1" style={{borderBottom:"2px solid #979797 " ,width:"380px"}}> </h1>
                                                </div>
                                                <div className="col-7" style={{ display:"flex" }}>
                                                    <a href="#"><img style={{width:"178px", height:"auto", borderRadius:"10px", marginTop:"15px"}} src={artikellainnya3} alt="Artikel" /></a>
                                                    <div class="col-md-12">
                                                        <a style={{textDecoration:"none", color:"#000000"}} href="">
                                                        <div class="card-body">
                                                            <h5 class="card-title" style={{ fontWeight: "700", fontSize: "15px"}}> Turorial membuat tabung mini</h5>
                                                            <p class="card-text" style={{fontWeight: "500", fontSize: "10px"}}>Alat & Bahan :
                                                            <p>• Botol 
                                                            <p>• Wallpaper / Wallsticker...</p>
                                                            </p>
                                                            </p>
                                                        </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                
                                               
                                            </div>
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