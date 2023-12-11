import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Dropdown } from 'react-bootstrap';
import prof from "../assets/prof.png";
import React, { useEffect ,useState} from "react";

// const handleLogout = () => {
//     // Hapus informasi akun dari localStorage saat logout
//     localStorage.removeItem('userData');
//     // Lakukan langkah-langkah logout lainnya, seperti mengarahkan pengguna ke halaman login
//     // atau mengganti state loginStatus menjadi null, dll.
//   };


function Navbarlogin() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Ambil data pengguna dari localStorage saat komponen dimuat
        const storedUserData = localStorage.getItem('userData');

        if (storedUserData) {
            // Parse data JSON dari localStorage dan set ke state
            setUserData(JSON.parse(storedUserData));
        }
    }, []);
    // Tambahan: deklarasikan state setUserData


    return (
        <nav className="fixed-top navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3 bg-body-tertiary rounded">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} yarnalt="Logo" width="150" height="50" />
                </a>
                <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item mx-auto p-2">
                            <Link to="/Homelogin" className="nav-link active fs-5 text-black">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item mx-auto p-2">
                            <Link to="/Komunitas" className="nav-link  fs-5 text-black">
                                Comunity
                            </Link>
                        </li>
                        <li className="nav-item mx-auto p-2">
                            <Link to="/Tips" className="nav-link fs-5 text-black">
                                Videos
                            </Link>
                        </li>
                        <li className="nav-item mx-auto p-2">
                            <Link to="/Menuarticle" className="nav-link fs-5 text-black">
                                Article
                            </Link>
                        </li>
                        {/* <li className="nav-item mx-auto p-2">
              <Link to="/" className="nav-link fw-bold fs-5 text-black">
                Consultation
              </Link>
            </li> */}
                    </ul>
                </div>

                <Dropdown>
                    <Dropdown.Toggle variant="" className="rounded-circle" style={{ border: "none" }}>
                        <img src={prof} alt="" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/Profile" >
                            <div className="container">
                                <br />
                                <img className="mx-5" src={prof} alt="" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                                <h4>{userData ? userData.username : "Guest"}</h4>
                                <hr />
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item href="/profileEdit">Edit Profile</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="/Login">Log out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                {/* <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/signup" className="nav-link text-black">
              Sign Up
            </Link>
          </li>
        </ul>
        <button type="button" className="btn btn-danger rounded-pill">
          <Link
            to="/Login"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            Login
          </Link>
        </button> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbarlogin;
