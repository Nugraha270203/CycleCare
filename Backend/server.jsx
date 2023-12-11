const express = require("express");
const multer = require("multer");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto'); // Tambahkan library crypto

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const generateToken = (user) => {
  return jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
};

// Fungsi untuk membandingkan kata sandi dengan hash
const comparePasswords = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};


// Fungsi untuk menghasilkan kunci rahasia
const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex'); // 32 byte = 256 bit
};

// Gunakan fungsi generateSecretKey() di bawah ini
const secretKey = generateSecretKey();

// ... (lanjutan kode Anda)


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

app.post('/regis', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const username = req.body.username;

  // Validasi apakah email sudah ada dalam database
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


// Mulai server pada port 8082
app.listen(8082, () => {
  console.log('Server aktif...');
});
