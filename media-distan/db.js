const mongoose = require('mongoose');

// Format koneksi terbaru dengan timeout lebih panjang
const uri = "mongodb+srv://media_informasi:Janganbuka7@cluster0.yfzhlzv.mongodb.net/db_dinas?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    console.log("Sedang mencoba menembus jalur database (Sabar ya)...");
    
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 30000, // Tunggu sampai 30 detik
      connectTimeoutMS: 30000
    });

    console.log("✅ AKHIRNYA TERKONEKSI! Data sekarang akan tersimpan permanen.");
  } catch (err) {
    console.error("❌ TETAP GAGAL:");
    console.log("Pesan Error: " + err.message);
    console.log("--------------------------------------------------");
    console.log("SOLUSI TERAKHIR: Aktifkan VPN atau ganti ke sistem data.json");
    console.log("--------------------------------------------------");
  }
};

module.exports = connectDB;