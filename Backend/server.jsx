const express = require("express");
const multer = require("multer");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const path = require('path');
const bcrypt = require('bcrypt');
const crypto = require('crypto'); 
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Koneksi ke database MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cyclecare2"
});


// Endpoint untuk mendapatkan artikel
app.get("/Admin/artikel", (req, res) => {
  const sql = "SELECT * FROM artikel";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      return res.json({ error: "Error executing SQL query" });
    }
    return res.json(data);
  });
});



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'src', 'assets', 'gambar'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });
db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// File dari direktori gambar
app.use('/assets/gambar', express.static(path.join(__dirname, 'src', 'assets', 'gambar')));

// untuk menambah artikel dengan gambar
app.post("/Admin/tambahartikel", upload.single('foto'), (req, res) => {
  const judul_artikel = req.body.judul_artikel;
  const foto = req.file.filename; // Nama file gambar yang diunggah

  const sql = "INSERT INTO artikel (`judul_artikel`, `foto`) VALUES (?, ?)";
  const values = [judul_artikel, foto];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      return res.json({ error: "Error executing SQL query" });
    }
    return res.json(data);
  });
});

// untuk menghapus artikel
app.delete("/Admin/artikel/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM artikel WHERE id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      return res.json({ error: "Error executing SQL query" });
    }
    return res.json(data);
  });
});
// Endpoint untuk registrasi
app.post('/regis', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const username = req.body.username;

  // untuk memvalidasi apakah email sudah ada dalam database
  db.query(
    "SELECT * FROM user WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error during registration');
      } else {
        // Jika email sudah ada, kirim respons bahwa registrasi gagal
        if (result.length > 0) {
          res.status(400).send('Email is already registered');
        } else {
          // Jika email belum terdaftar, lakukan penyisipan ke database
          db.query(
            "INSERT INTO user (email, password, first_name, last_name, username) VALUES (?, ?, ?, ?, ?)",
            [email, password, firstname, lastname, username],
            (err, result) => {
              if (err) {
                console.log(err);
                res.status(500).send('Error during registration');
                alert('Error during registration')
              } else {
                res.status(200).send('Registration successful');
              }
            }
          );
        }
      }
    }
  );
});
// Endpoint untuk login
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  db.query(
    "SELECT * FROM user WHERE email = ? AND password = ? ",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({err: err})
      }
      if (result.length > 0) {
        res.send(result)
      } else {
        res.send({ massage: "wrong username or pasasword!" })
      }

    }
    
  );
  
});


// Mmemulai server pada port 8082
app.listen(8082, () => {
  console.log('Server aktif...');
});
