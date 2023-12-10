import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbarlandingpage from "../component/navbarlandingpage";
import Navbar from "../component/navbar";
import jirigen from "../assets/jirigen.png"
import Footer from "../component/Footer.jsx"
import Navbarlogin from "../component/Navbarlogin";

function Article() {
    return (
        <>
            <Navbarlogin />
            <br />
            <br />
            <br />
            <div className="container">
                <div className=" d-flex justify-content-center mt-5">
                    <div
                        class="card shadow-lg text-bg-danger rounded-5 px-4"
                        style={{ maxWidth: "100%" }}
                    >
                        <div class="card-body">
                            <h1 class="card-title">
                                11 Cara Merawat Motor Matic Biar Awet Layaknya Motor Baru
                            </h1>
                            <p class="card-text">Admin,22 November 2023</p>
                        </div>
                    </div>
                </div>

                <div className=" d-flex justify-content-center mt-3">
                    <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-5 px-4" style={{ minWidth: "100%" }}>
                        <div className="row">
                            <div className="col-md-7 offset-md-0">
                                <div class="card-body ">
                                    <h3 class="card-title text-justify text-danger mt-5">
                                        Nah, apa kiranya cara yang tepat untuk merawat motor jenis ini?
                                        Simak tips selengkapnya di ulasan berikut yang sudah kami
                                        rangkum dari berbagai sumber terpercaya
                                    </h3>
                                </div>
                            </div>
                            <div className="col-md-3 offset-md-1   ">
                                <div class="card-body">
                                    <img src={jirigen} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="mb-5" >
                    <p className="text-justify drop-cap">Motor matic adalah salah satu jenis motor yang paling banyak digunakan di Indonesia. Oleh karenanya, wajib kita ketahui cara merawat motor matic dengan baik dan benar. Ini bertujuan agar motor matic Anda bisa awet dipakai untuk menunjang mobilitas sehari-hari dan meningkatkan nilai jual motor, khususnya jika Anda ingin mengajukan pinjaman jaminan BPKB motor.
                        Indonesia adalah salah satu negara dengan populasi pengguna sepeda motor terbanyak. Dikutip dari website resmi Korlantas Polri, per 18 Desember 2022, pengguna motor di Indonesia sudah mencapai 152 juta dengan Jawa Timur sebagai provinsi dengan populasi motor terbanyak. Adanya data tersebut menunjukan bahwa motor adalah transportasi yang paling digemari oleh masyarakat dan sering digunakan untuk membantu kegiatan sehari-hari.
                        Nah, apa kiranya cara yang tepat untuk merawat motor jenis ini? Simak tips selengkapnya di ulasan berikut yang sudah kami rangkum dari berbagai sumber terpercaya. </p>
                    <h4>1. Jangan Lupa Untuk Panaskan Motor Sehari Sekali</h4>
                    <p>        Keawetan sebuah motor matic terletak dari cara kita memperlakukannya. Salah satu diantaranya yakni dengan rutin memanaskan motor setiap hari. Cara merawat motor matic ini dilakukan guna mempertahankan performa mesin tetap prima. Sebab, motor yang dipanaskan akan membuat oli motor melumasi bagian dalam dengan sempurna, sehingga mesin yang ada di dalamnya bisa terhindar dari kerusakan.</p>
                    <h4>2. Ganti Oli Secara Terjadwal</h4>
                    <p>       Oli motor adalah pelumas mesin yang berfungsi untuk menghindari terjadinya gesekan antar suku cadang, misalnya antara piston dan dinding silinder. Oli juga membantu mencegah adanya oksidasi pada komponen mesin yang dapat menyebabkan karat. Oleh karenanya, demi menjaga mesin motor Anda tetap bekerja dengan optimal, pastikan Anda mengganti oli secara terjadwal. Secara umum, oli motor bisa diganti saat jarak tempuh sudah mencapai 2.000 km atau dua bulan sekali. Pilihlah oli yang sesuai dengan motor Anda dan hindari untuk bergonta-ganti merk oli.</p>
                    <h4>3. Cek Aki dan Busi Secara Rutin</h4>
                    <p>       Seperti halnya oli, aki dan busi adalah komponen penting yang terdapat pada motor. Jika keduanya tidak terawat dengan baik atau tidak dicek secara rutin, motor yang Anda gunakan bisa tiba-tiba mogok di tengah jalan. Hal tersebut tentunya akan merugikan Anda, terlebih jika Anda harus berkendara jauh dengan lokasi bengkel motor yang sulit dijangkau.
                        Berikut ini beberapa tips yang bisa Anda ikuti untuk merawat aki motor sebagai salah satu cara merawat motor matic:
                    </p>
                    <ul>
                        <li>Pastikan aki motor Anda selalu terisi penuh.
                        </li>
                        <li>Hindari panas dan lembab, hal ini dimaksudkan agar kinerja aki tidak menurun.
                        </li>
                        <li> Membersihkan terminal aki dari kotoran yang menempel secara berkala.
                        </li>
                        <li>Gunakan aki motor sebagaimana mestinya, jangan pernah mengutak-atik aki untuk keperluan lain yang bisa mengakibatkan keausan lebih cepat.</li>
                    </ul>
                    <h4>4. Cek Kondisi Vant Belt dan Roller Motor</h4>
                    <p>        Vant Belt atau biasa disingkat sebagai v-belt dan roller adalah bagian yang ada pada motor matic dan memiliki fungsi serupa dengan rantai, yakni sebagai pengantar daya pada mesin Anda. Kedua benda ini rentan akan terkena kotoran, sehingga harus dilakukan pembersihan sekaligus pengecekan secara rutin.
                        Jangan sampai, saat Anda berkendara motor Anda tidak berfungsi sebagaimana mestinya dan menyulitkan Anda untuk mencapai tujuan. Anda bisa melakukan pengecekan secara rutin di bengkel langganan Anda bersamaan dengan servis rutin atau tune up.</p>
                    <h4>5. Cek Bagian Shockbreaker</h4>
                    <p>           Kunci motor matic yang awet dan berumur panjang salah satunya terletak pada bagian shockbreaker. Shockbreaker atau peredam hentakan merupakan komponen motor yang berfungsi untuk menjaga mesin dan pengendaranya tetap stabil dari adanya guncangan saat melawati jalan berlubang, jalan bergelombang, atau permukaan jalan lainnya yang tidak terlalu rata. Agar shockbreaker Anda berfungsi secara optimal, pastikan untuk mengganti olinya saat jarak tempuh telah mencapai 10.000 KM.</p>
                </div>

            </div>
            <Footer />
        </>
    );
}
export default Article;
