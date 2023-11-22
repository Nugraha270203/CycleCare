import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../component/navbar";


function Profile() {
    return (
      <>
        <Navbar />
        <section style={{backgroundColor:"",}}>
        <div className="container">
          <div style={{fontWeight:"700",fontSize:"30px", textAlign:"center"}}>
              Profile
          </div>
          <div>
            <img src="/src/assets/prof.png" alt="logo" 
            style={{width: "80px", transform:"translate(760%,80%)"}}/>
            </div>
          <div style={{fontWeight:"400",fontSize:"20px", textAlign:"center",transform:"translate(0%,210%)"}}>
            @Matt
          </div>
          <div style={{fontWeight:"700",fontSize:"25px", textAlign:"center",transform:"translate(0%,180%)"}}>
            Rahmat
          </div>
          <a href="#"><button class="btn btn-danger" style={{borderRadius:"10px",width:"8%", transform:"translate(575%,280%)"}}>Edit</button></a>
        </div>
        <div className="container center-container">
          <br />
            <form style={{transform:"translate(80%,40%)", width:"500px", borderRadius:"10px"}}>
                <div className="form-group">
                    <h1 style={{fontSize:"15px",fontWeight:"400"}}>Email</h1>
                    <input style={{ border:"2px solid #BA3837" }} type="text" className="form-control" id="username" placeholder="matt@gmail.com " />
                </div>
                <br />
                <div className="form-group md-8">
                    <h1 style={{fontSize:"15px",fontWeight:"400"}}>No. Telepon :</h1>
                    <input style={{ border:"2px solid #BA3837" }} type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <br />
                <div className="form-group md-9">
                    <h1 style={{fontSize:"15px",fontWeight:"400"}}>Jenis Kelamin :</h1>
                    <input style={{ border:"2px solid #BA3837" }} type="text" className="form-control" id="username" placeholder="Laki-laki" />
                </div>
                <br />
                <div className="form-group md-10">
                    <h1 style={{fontSize:"15px",fontWeight:"400"}}>Alamat :</h1>
                    <input style={{ border:"2px solid #BA3837" }} type="password" className="form-control" id="password" placeholder="Kota Lhokseumawe, indonesia " />
                </div>
                </form>
                </div>
                <div id="footer" className="container-fluid" style={{ padding: 0 }}>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
        <div className="landing-section">
          <img src="/src/assets/footer.png"
            style={{ width: "100%", height: "auto", position: "relative" }}
          />
        </div>
      </div>
        </section>
      </>
    );
  }
export default Profile;