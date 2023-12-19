import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navdas.css";
import logo from "../../assets/logo.png";
import q1 from "../../assets/q1.png";
import art12 from "../../assets/art12.png";
import prof from "../../assets/prof.png";
import con1 from "../../assets/con1.png";
import con2 from "../../assets/con2.png";
import q2 from "../../assets/q2.png";
import "../../assets/vendor/jquery/jquery.min.js";
import "../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "../../assets/vendor/jquery-easing/jquery.easing.min.js";
import "../../assets/js/sb-admin-2.min.js";
import axios from 'axios';

function Tambahvideo() {
    const [judul_video, setjudul_video] = useState('');
    const [link, setlink] = useState('');
    const [thumbnail, setthumbnail] = useState(null);

    const [error, setError] = useState(null);
    const [notifMessage, setNotifMessage] = useState(null);

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("judul_video", judul_video);
        formData.append("link", link);
        formData.append("thumbnail", thumbnail);

        try {
            await axios.post("http://localhost:8082/Admin/tambahvideo", formData);
            setNotifMessage("Artikel berhasil ditambahkan!");
            setError(null);
            navigate('/Admin/Tvid');
            alert('Video berhasil ditambahkan!')
        } catch (error) {
            if (error.response) {
                console.error("Server error with response:", error.response.data);
                setNotifMessage("Gagal menambahkan video. Silakan coba lagi.");
            } else if (error.request) {
                console.error("No response received from the server");
                setNotifMessage("Gagal menambahkan video. Tidak ada respons dari server.");
            } else {
                console.error("Error:", error.message);
                setNotifMessage("Gagal menambahkan video. " + error.message);
            }
        }
    }

    return (
        <>



            {/* sidebar */}
            <div id="wrapper">
                <ul class="navbar-nav bg-grey sidebar sidebar-dark accordion shadow-lg" id="accordionSidebar">
                    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                        <div class="sidebar-brand-icon rotate-n-15">

                        </div>
                        <div class="sidebar-brand-text mx-3">
                            <img src={logo} alt="Logo" width="100%" height="auto" />
                        </div>
                    </a>
                    <hr class="sidebar-divider my-0" />
                    <li class="nav-item fw-semibold">
                        <a class="nav-link text-danger" href="/Admin/Dashnav">
                            <img src={q1} alt="" width="10%" height="auto" />
                            <span className="fs-6">  Dashboard</span></a>
                    </li>

                    <li class="nav-item fw-semibold active">
                        <a class="nav-link text-danger" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true"
                            aria-controls="collapseTwo">
                            <span className="fs-6">Content</span>
                        </a>
                        <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo"
                            data-parent="#accordionSidebar">
                            <div class="bg-warning collapse-inner rounded">
                                <a class="collapse-item " href="/Admin/Artikel">Artikel</a>
                                <a class="collapse-item active text-danger" href="/Admin/Tvid">Video</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item fw-semibold">
                        <div id="collapsePages" class="collapse" aria-labelledby="headingPages"
                            data-parent="#accordionSidebar" />
                        <li className="nav-item fw-semibold">
                            <a class="nav-link collapsed text-danger" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                <span className="fs-6 "> Motor</span>
                            </a>
                            <div id="collapsePages" class="collapse" aria-labelledby="headingPages"
                                data-parent="#accordionSidebar">
                                <div class="bg-warning collapse-inner rounded">
                                    <a class="collapse-item" href="/Admin/Motor">Brand Motor</a>
                                    <a class="collapse-item" href="/Admin/Tipe">Tipe Motor</a>
                                    <a class="collapse-item" href="utilities-color.html">Seri Motor</a>
                                </div>
                            </div>
                        </li>
                    </li>
                </ul>
                {/* sidebar */}
                {/* navbar */}
                <div id="content-wrapper" class="d-flex flex-column bg-body-secondary">
                    <div id="content ">
                        <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top shadow" style={{ backgroundColor: "#800000" }}>
                            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                                <i class="fa fa-bars"></i>
                            </button>
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item dropdown no-arrow mx-1">
                                    <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src={con1} />
                                    </a>
                                </li>
                                <li class="nav-item dropdown no-arrow mx-1">
                                    <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src={con2} />
                                    </a>
                                </li>
                                <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                    aria-labelledby="searchDropdown">
                                    <form class="form-inline mr-auto w-100 navbar-search">
                                        <div class="input-group">
                                            <input type="text" class="form-control bg-light border-0 small"
                                                placeholder="Search for..." aria-label="Search"
                                                aria-describedby="basic-addon2" />
                                            <div class="input-group-append">
                                                <button class="btn btn-primary" type="button">
                                                    <i class="fas fa-search fa-sm"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>


                                <li class="nav-item dropdown no-arrow">
                                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">Rahmat</span>
                                        <img class="img-profile rounded-circle"
                                            src={prof} />
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="userDropdown">
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Profile
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Settings
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Activity Log
                                        </a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Logout
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        {/* navbar */}


                        {/* content */}
                        <div className="col" >
                            <div className="container" >
                                <div className="container-fluid">
                                    <h3 className="mb-5">Tambah Video</h3>
                                    <hr />

                                    {notifMessage && <Alert variant="success">{notifMessage}</Alert>}
                                    <Form onSubmit={handleSubmit} className="mt-3">
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Judul video</Form.Label>
                                            <Form.Control type="text" rows={3} placeholder="Buat judul video" onChange={e => setjudul_video(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>link</Form.Label>
                                            <Form.Control type="text" rows={3} placeholder="Masukan Link Video" onChange={e => setlink(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formFile">
                                            <Form.Label>Upload Thumbnail</Form.Label>
                                            <Form.Control type="file" onChange={(e) => setthumbnail(e.target.files[0])} />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Tambah video
                                        </Button>
                                    </Form>

                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>


            
        </>
    );
}

export default Tambahvideo;
