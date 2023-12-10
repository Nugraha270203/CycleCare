const express = require("express");
const multer = require("multer");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'src', 'assets', 'gambar'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

// Koneksi ke database MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cyclecare"
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database");
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

// Menyajikan file statis dari direktori gambar
app.use('/assets/gambar', express.static(path.join(__dirname, 'src', 'assets', 'gambar')));



// Endpoint untuk menambah artikel dengan gambar
app.post("/Admin/tambahartikel", upload.single('foto'), (req, res) => {
  const j_artikel = req.body.j_artikel;
  const foto = req.file.filename; // Nama file gambar yang diunggah

  const sql = "INSERT INTO artikel (`j_artikel`, `foto`) VALUES (?, ?)";
  const values = [j_artikel, foto];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      return res.json({ error: "Error executing SQL query" });
    }
    return res.json(data);
  });
});

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


// Mulai server pada port 8082
app.listen(8082, () => {
  console.log('Server aktif...');
});
