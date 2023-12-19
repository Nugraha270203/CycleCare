import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarlogin from "../component/Navbarlogin";
import Footer from "../component/Footer";


function ProfileEdit() {
    return (
        <>
            <Navbarlogin />
            <section>

                <div className="container">
                        <div className=" mt-5">
                            <br />
                            <br />
                            <br />
                            <br />
                            <h3 className="mb-4" style={{marginLeft:"470px"}}>  Edit Profile</h3>
                            <img src="/src/assets/prof.png" alt="logo" style={{ width: "80px", marginLeft: "500px" }} />
                            <br />
                            <br />
                            <h5 style={{marginLeft:"505px"}}> @Matt</h5>
                            <h5 className=" fw-bold"style={{marginLeft:"475px"}}>Rahmat Azhari</h5>
                        </div>

                            <div className="" style={{ marginLeft: "300px",marginTop:"-55px", backgroundColor: "#E5E5E5", borderRadius: "20px", height: "450px", width: "600px", transform: "translate(-8%,20%)", justifyContent: "center" }}>
                                <form style={{ justifyContent: "center", width: "500px", borderRadius: "10px", transform: "translate(10%,10%)" }}>
                                    <br />
                                    <div className="form-group md-8">
                                        <h1 style={{ fontSize: "15px", fontWeight: "400" }}>No. Telepon :</h1>
                                        <input style={{ border: "2px solid #BA3837" }} type="text" className="form-control" id="hp" placeholder="081261878427" />
                                    </div>
                                    <br />
                                    <div className="form-group md-9">
                                        <h1 style={{ fontSize: "15px", fontWeight: "400" }}>Jenis Kelamin :</h1>
                                        <input style={{ border: "2px solid #BA3837" }} type="text" className="form-control" id="jeniskelamin" placeholder="Laki-laki" />
                                    </div>
                                    <br />
                                    <div className="form-group md-10">
                                        <h1 style={{ fontSize: "15px", fontWeight: "400" }}>Alamat :</h1>
                                        <input style={{ border: "2px solid #BA3837" }} type="text" className="form-control" id="alamat" placeholder="Kota Lhokseumawe, indonesia " />
                                    </div>
                                    <div className="form-group text-center" style={{marginTop:"-50px"}}>
                                        <a href="/Profile">
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                style={{ borderRadius: "10px", width: "50%", transform: "translate(0%,280%)" }}
                                            >
                                                Simpan Perubahan
                                            </button>
                                        </a>
                                    </div>
                                </form>
                        </div>
                    </div>
<br /><br /><br />
                {/* <div className="container justify-content-center">
                    <br />
                    <br />
                    <div style={{ fontWeight: "700", fontSize: "30px", textAlign: "center" }}>
                        Edit Profile
                    </div>
                    <div>
                        <img src="/src/assets/prof.png" alt="logo"
                            style={{ width: "80px", transform: "translate(650%,80%)" }} />
                    </div>
                    <div style={{ fontWeight: "400", fontSize: "20px", textAlign: "center", transform: "translate(0%,210%)" }}>
                        @Matt
                    </div>
                    <div style={{ fontWeight: "700", fontSize: "25px", textAlign: "center", transform: "translate(0%,180%)" }}>
                        Rahmat
                    </div>
                </div>
                <div className="container">
                    <br />
                    <div className="mx-auto" style={{marginLeft:"500px", backgroundColor: "#E5E5E5", borderRadius: "20px", height: "500px", width: "600px", transform: "translate(-8%,20%)", justifyContent: "center" }}>
                        <form style={{ justifyContent: "center", width: "500px", borderRadius: "10px", transform: "translate(10%,10%)" }}>
                            <br />
                            <div className="form-group md-8">
                                <h1 style={{ fontSize: "15px", fontWeight: "400" }}>No. Telepon :</h1>
                                <input style={{ border: "2px solid #BA3837" }} type="text" className="form-control" id="hp" placeholder="081261878427" />
                            </div>
                            <br />
                            <div className="form-group md-9">
                                <h1 style={{ fontSize: "15px", fontWeight: "400" }}>Jenis Kelamin :</h1>
                                <input style={{ border: "2px solid #BA3837" }} type="text" className="form-control" id="jeniskelamin" placeholder="Laki-laki" />
                            </div>
                            <br />
                            <div className="form-group md-10">
                                <h1 style={{ fontSize: "15px", fontWeight: "400" }}>Alamat :</h1>
                                <input style={{ border: "2px solid #BA3837" }} type="text" className="form-control" id="alamat" placeholder="Kota Lhokseumawe, indonesia " />
                            </div>
                            <div className="form-group text-center my-2">
                                <a href="/Profile">
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        style={{borderRadius:"10px",width:"50%", transform:"translate(0%,280%)"}}
                                    >
                                        Simpan Perubahan
                                    </button>
                                </a>
                            </div>

                        </form>
                    </div>
                    <div id="footer" className="container-fluid" style={{ padding: 0 }}>
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div> */}
            </section>
            <Footer />
        </>
    );
}
export default ProfileEdit;