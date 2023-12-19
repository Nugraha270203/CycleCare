import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../component/Footer";
import logon from "../assets/logon.png";
import bg5 from "../assets/bg5.png";
import s1 from "../assets/s1.gif";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Create() {
    const backgroundStyle = {
        backgroundImage: `url(${bg5})`,
        backgroundSize: "cover",
        backgroundPosition: "flex",
        minHeight: "100vh",
    };
    const navigate = useNavigate();
    const location = useLocation();
    const dataFromRegistration = location.state && location.state.data;
    const [username, setUsername] = useState(dataFromRegistration && dataFromRegistration.username ? dataFromRegistration.username : '');




    const handleCreateUsername = () => {
        // Periksa apakah dataFromRegistration memiliki data yang diperlukan
        if (dataFromRegistration) {
            const { email, password, firstname, lastname } = dataFromRegistration;



            // Kirim data username ke server
            axios.post('http://localhost:8082/regis', {
                email,
                password,
                firstname,
                lastname,
                username,
            }).then((response) => {
                console.log(response.data);
                navigate('/Homelogin');
            }).catch((error) => {
                console.error('Error during creating username:', error);
                alert('Gagal membuat username. Silakan coba lagi.');
                console.log(error.response.data);  // Menampilkan pesan kesalahan dari server
            });
        }
    };

    const handleChangeUsername = (event) => {
        // Perbarui state username saat ada perubahan pada input
        setUsername(event.target.value);
    };


    return (
        <div className="background" style={backgroundStyle}>
            <div className="container">
                <a className="navbar-brand" href="/Home">
                    <img src={logon} alt="Logo" width="20%" height="auto" />
                </a>

                <div className="card mt-5 mx-auto " style={{ width: "30rem" }}>
                    <h2 className="mx-auto text-danger mt-3 mb-4">Create Your Username</h2>
                    <p className="text-lg-center">You can always change it</p>
                    <img src={s1} className="card-img-top mx-auto" alt="..." style={{ width: "80%", height: "auto" }} />
                    <div className="card-body">

                        <div className="c">
                            <div className="row d-flex mx-auto" style={{ height: "20px", width: "60%" }}>
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control text-center"
                                        id="create"
                                        placeholder="Create Your Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                    <div className="form-group text-center my-1">
                        <a href="/homelogin">
                            <button type="button"
                                className="btn btn-danger btn-lg btn-sm rounded-pill"
                                style={{ width: "50%", }}
                                onClick={handleCreateUsername}
                            >   Continue
                            </button>
                        </a>
                    </div>
                    <br />
                </div>

                <br />
            </div>
            <Footer />
        </div>
    );
}

export default Create;
