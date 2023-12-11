
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navdas.css";
import { Link } from "react-router-dom";
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

function Artikel() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };


    const [artikelList, setArtikelList] = useState([]);
    const [notifMessage, setNotifMessage] = useState(null);


    useEffect(() => {
        axios
            .get("http://localhost:8082/Admin/artikel")
            .then((res) => setArtikelList(res.data))
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8082/Admin/artikel/${id}`)
            .then((res) => {
                // Setelah berhasil menghapus, perbarui daftar artikel
                setArtikelList(artikelList.filter(data => data.id !== id));
                setNotifMessage("Artikel berhasil dihapus!");
            })
            .catch((err) => {
                console.log(err);
                setNotifMessage("Gagal menghapus artikel. Silakan coba lagi.");
            });
    };
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
                        <a class="nav-link text-danger" href="/Admin/DashNav">
                            <img src={q1} alt="" width="10%" height="auto" />
                            <span className="fs-6">  Dashboard</span></a>
                    </li>

                    <li class="nav-item">
                        <li class="nav-item fw-semibold active">
                            <a class="nav-link text-danger" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true"
                                aria-controls="collapseTwo">
                                <span className="fs-6">Content</span>
                            </a>
                            <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo"
                                data-parent="#accordionSidebar">
                                <div class="bg-white py-1 collapse-inner rounded">
                                    <a class="collapse-item active text-danger" href="/Admin/Artikel">Artikel</a>
                                    <a class="collapse-item" href="/Admin/Tvid">Video</a>
                                </div>
                            </div>
                        </li>

                        <a class="nav-link collapsed text-danger" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                            <img src={art12} alt="" width="10%" height="auto" />
                            <span> Video</span>
                        </a>
                        <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                            data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <a class="collapse-item" href="utilities-color.html">Colors</a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link collapsed text-danger" href="/Admin/tambahartikel" data-toggle="collapse" data-target="#collapseUtilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                            <img src={q2} alt="" width="10%" height="auto" />
                            <span> Community</span>
                        </a>
                        <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                            data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <a class="collapse-item" href="utilities-color.html">Colors</a>
                            </div>
                        </div>
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
                                    <h3 className="mb-5">ARTIKEL</h3>
                                    <hr />
                                    <a href="/Admin/tambahartikel">
                                        <button className="btn btn-primary">Tambah Artikel</button>
                                    </a>
                                    <table className="table mt-3">
                                        <thead>
                                            <tr>
                                                <th scope="col">No</th>
                                                <th scope="col">Judul Artikel</th>
                                                <th scope="col">Thumbnail</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {artikelList.map((artikel, no) => (
                                                <tr key={artikel.id}>
                                                    <td>{no + 1}</td>
                                                    <td>{artikel.judul_artikel}</td>
                                                    <td>{artikel.foto}</td>
                                                    <td>
                                                        <button className="btn btn-danger" onClick={() => handleDelete(artikel.id)}>Hapus</button>
                                                    </td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        {/* content */}

                    </div>
                </div>
            </div>
        </>

    )
}
export default Artikel;


