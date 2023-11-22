import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarlogin from "../component/Navbarlogin";
import Footer from "../component/Footer";


function Profile() {
    return (
      <>
        <Navbarlogin />
        <section style={{backgroundColor:"",}}>
        <div className="container">
          <br />
          <br />
          <div style={{fontWeight:"700",fontSize:"30px", textAlign:"center"}}>
              Profile
          </div>
          <div>
            <img src="/src/assets/prof.png" alt="logo" 
            style={{width: "80px", transform:"translate(540%,80%)"}}/>
            </div>
          <div style={{fontWeight:"400",fontSize:"20px", textAlign:"center",transform:"translate(0%,210%)"}}>
            @Matt
          </div>
          <div style={{fontWeight:"700",fontSize:"25px", textAlign:"center",transform:"translate(0%,180%)"}}>
            Rahmat
          </div>
          <a href="/ProfileEdit"><button class="btn btn-danger" style={{borderRadius:"10px",width:"10%", transform:"translate(452%,280%)"}}>Edit</button></a>
        </div>
        <div className="container center-container">
          <br />
          <div style={{backgroundColor:"#E5E5E5", borderRadius:"20px", height:"500px", width:"600px",transform:"translate(-8%,20%)", justifyContent:"center"}}>
          <form style={{justifyContent:"center", width:"500px", borderRadius:"10px", transform:"translate(10%,10%)"}}>
                <div className="form-group">
                    <h1 style={{fontSize:"15px",fontWeight:"400"}}>Email</h1>
                    <input style={{ border:"2px solid #BA3837" }} type="text" className="form-control" id="username" placeholder="matt@gmail.com " />
                </div>
                <br />
                <div className="form-group md-8">
                    <h1 style={{fontSize:"15px",fontWeight:"400"}}>No. Telepon :</h1>
                    <input style={{ border:"2px solid #BA3837" }} type="text" className="form-control" id="hp" placeholder="081261878427" />
                </div>
                <br />
                <div className="form-group md-9">
                    <h1 style={{fontSize:"15px",fontWeight:"400"}}>Jenis Kelamin :</h1>
                    <input style={{ border:"2px solid #BA3837" }} type="text" className="form-control" id="jeniskelamin" placeholder="Laki-laki" />
                </div>
                <br />
                <div className="form-group md-10">
                    <h1 style={{fontSize:"15px",fontWeight:"400"}}>Alamat :</h1>
                    <input style={{ border:"2px solid #BA3837" }} type="text" className="form-control" id="alamat" placeholder="Kota Lhokseumawe, indonesia " />
                </div>
                </form>
                </div>
                <div id="footer" className="container-fluid" style={{ padding: 0 }}>
                  <br />
                  <br />
                  <br />
                  <br />
          </div>
      </div>
      <Footer />
        </section>
      </>
    );
  }
export default Profile;