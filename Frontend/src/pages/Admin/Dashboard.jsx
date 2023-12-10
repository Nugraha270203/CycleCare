import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import Sidebaradmin from "../../component/sidebaradmin";
import "../../index.css"

function Dashboard() {
    return (
        <>
            <div className="row">
                <div className="col-2">
                    <div className="sidebar1">
                        <ul className="nav flex-column">
                            <div className="text-center"><h1>Cyclecare</h1></div>
                            <hr />
                            <li className="nav-item1">
                                <Link to="/Admin/dashboard" className="nav-link1 aktif">Dashboard</Link>
                            </li>
                            <li className="nav-item1">
                                <Link to="/Admin/Artikel" className="nav-link1  is-hover">Artikel</Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="col">
                    <div className="container">
                        <div className="container-fluid">
                            <h1>Welcome to dashboard Cyclecare</h1>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <p>Tes</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <p>Tes</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <p>Tes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard;