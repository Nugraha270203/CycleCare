import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Sidebaradmin() {
    
    return (
        <>
            <div className="sidebar">
                <ul className="nav flex-column">
                    <div className="text-center"><h1>Cyclecare</h1></div>
                    <hr />
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        <Link to="/Artikel" className="nav-link">Artikel</Link>

                    </li>   

                </ul>
            </div>

        </>
    )
}

export default Sidebaradmin;