import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../../index.css"

function Artikel() {
    return (
        <>
            <div className="row">
                <div className="col-2">
                    <div className="sidebar1">
                        <ul className="nav flex-column">
                            <div className="text-center"><h1>Cyclecare</h1></div>
                            <hr />
                            <li className="nav-item1">
                                <Link to="/Admin/dashboard" className="nav-link1 is-hover">Dashboard</Link>
                            </li>
                            <li className="nav-item1">
                                <Link to="/Admin/Artikel" className="nav-link1 aktif ">Artikel</Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="col">
                    <div className="container">
                        <div className="container-fluid">
                            <h1 className="fw-bold">Artikel</h1>
                            <br />
                            <br />
                            <button className="btn btn-primary">Tambah Artikel</button>
                            <hr />
                            <table class="table">
                                <thead>
                                    <tr className="table-danger">
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>
                                            <button className="btn btn-danger">Hapus</button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Artikel;