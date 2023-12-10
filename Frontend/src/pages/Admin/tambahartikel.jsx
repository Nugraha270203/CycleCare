import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function tambahartikel() {
    const [j_artikel, setj_artikel] = useState('');
    const [foto, setfoto] = useState(null);

    const [error, setError] = useState(null);
    const [notifMessage, setNotifMessage] = useState(null);

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("j_artikel", j_artikel);
        formData.append("foto", foto);
    
        try {
            await axios.post("http://localhost:8082/Admin/tambahartikel", formData);
            setNotifMessage("Artikel berhasil ditambahkan!");
            setError(null);
            navigate('/Admin/Artikel');
        } catch (error) {
            if (error.response) {
                console.error("Server error with response:", error.response.data);
                setNotifMessage("Gagal menambahkan artikel. Silakan coba lagi.");
            } else if (error.request) {
                console.error("No response received from the server");
                setNotifMessage("Gagal menambahkan artikel. Tidak ada respons dari server.");
            } else {
                console.error("Error:", error.message);
                setNotifMessage("Gagal menambahkan artikel. " + error.message);
            }
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-2">
                    <div className="sidebar1">
                        <ul className="nav flex-column">
                            <div className="text-center">
                                <h1>Cyclecare</h1>
                            </div>
                            <hr />
                            <li className="nav-item1">
                                <Link to="/Admin/dashboard" className="nav-link1 is-hover">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item1">
                                <Link to="/Admin/Artikel" className="nav-link1 aktif ">
                                    Artikel
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col">
                    <div className="container">
                        <div className="container">
                            <div className="container-fluid">
                                <br />
                                <br />
                                {notifMessage && <Alert variant="success">{notifMessage}</Alert>}
                                <Form onSubmit={handleSubmit} >
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Text Input Banyak</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Tuliskan teks disini" onChange={e => setj_artikel(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formFile">
                                        <Form.Label>Upload Gambar</Form.Label>
                                        <Form.Control type="file" onChange={(e) => setfoto(e.target.files[0])} />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default tambahartikel;
