import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../../index.css";
import axios from "axios";
import Bg5 from "../../assets/Bg5.png";
import logo from "../../assets/logo.png";

function Artikel() {
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
            <div></div>
            <div className="row">
                <div className="col-2 ">
                    <div className="sidebar1" style={{backgroundColor : '#808080'}}>
                        <ul className="nav flex-column text-danger">
                            <div className="text-center">
                                <img src={logo} alt="Logo" width="100%" height="auto"/>
                            </div>
                            <hr />
                            <li className="nav-item1">
                                <Link to="/Admin/dashboard" className="nav-link1 is-hover text-danger">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item1">
                                <Link to="/Admin/Artikel" className="nav-link1 aktif text-danger">
                                    Artikel
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="col">
                    <div className="container">
                        <div className="container-fluid">
                            <a href="/Admin/Tambahartikel">
                                <button className="btn btn-primary">Tambah Artikel</button>
                            </a>
                            <hr />
                            {notifMessage && (
                                <div className="alert alert-success" role="alert">
                                    {notifMessage}
                                </div>
                            )}
                                <div style={{ overflowY: 'auto', maxHeight: '420px' }}>

                            
                            <table className="table">
                                <thead>
                                    <tr className="table-danger">
                                        <th scope="col">No</th>
                                        <th scope="col">Judul artikel</th>
                                        <th scope="col">Konten</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                    

                                <tbody>
                                    {artikelList.map((data, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{data.j_artikel}</td>
                                            <td>
                                                <img
                                                    src={`http://localhost:8082/assets/gambar/${data.foto}`}
                                                    alt={`Gambar untuk ${data.j_artikel}`}
                                                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                                                />
                                            </td>
                                            <td>
                                                <button onClick={() => handleDelete(data.id)} className="btn btn-danger">Hapus</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Artikel;
