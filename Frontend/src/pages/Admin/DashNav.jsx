import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navdas.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import q1 from "../../assets/q1.png";
import art1 from "../../assets/art1.png";
import art12 from "../../assets/art12.png";
import prof from "../../assets/prof.png";

function DashNav() {
    return (
        <>
            <div id="wrapper">
                <ul class="navbar-nav bg-white sidebar sidebar-dark accordion" id="accordionSidebar">
                    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                        <div class="sidebar-brand-icon rotate-n-15">

                        </div>
                        <div class="sidebar-brand-text mx-3">
                            <img src={logo} alt="Logo" width="100%" height="auto" />
                        </div>
                    </a>
                    <hr class="sidebar-divider my-0" />
                    <li class="nav-item active">
                        <a class="nav-link text-danger" href="#">
                            <img src={q1} alt="" width="10%" height="auto" />
                            <span>  Dashboard</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link collapsed text-danger" href="#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <img src={art1} alt="" width="10%" height="auto" />
                            <span> Articles</span>
                        </a>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div class="bg-red py-2 collapse-inner rounded">
                                <a class="collapse-item" href="#">Create Articles</a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
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
                </ul>

                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                                <i class="fa fa-bars"></i>
                            </button>

                            <ul class="navbar-nav ml-auto">
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
                    </div>
                </div>
            </div>
        </>
    )
}
export default DashNav;