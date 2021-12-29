// import db
const db = require("../config/database");

// class model student
class Student {
  // method query untuk semua data
  // menggunakan callback
  static all(callback) {
    return new Promise(function (resolve, reject) {
      const sql = "SELECT * FROM students";
      // Menggunakan method query
      db.query(sql, (err, result) => {
        callback(result);
      });
    });
  }
  
  /* Membuat fungsi show untuk menampilkan
      data saat di input */
  static show(id) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM students WHERE id = ${id}`;
      // Menggunakan method query
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }
  /**
     * TODO 1: Buat fungsi untuk insert data.
     * Method menerima parameter data yang akan diinsert.
     * Method mengembalikan data student yang baru diinsert.
     */
  static create(siswa) {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO students SET ?`;
      // Menggunakan method query
      db.query(sql, siswa,(err, results) => {        
        resolve(this.show(results.insertId));
      });
    });
  } 
}





// export class
module.exports = Student;
