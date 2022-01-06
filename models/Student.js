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
  // Membuat fungsi create (menambahkan data)
  static create(siswa) {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO students SET ?`;
      // Menggunakan method query
      db.query(sql, siswa, (err, results) => {
        resolve(this.show(results.insertId));
      });
    });
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id, (err, result) => {
        resolve(result[0]);
      });
    });
  }

  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = "UPDATE students SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, result) => {
        resolve(result);
      });
    });
    // Select data by id
    const student = await this.find(id);
    return student;
  }

  static delete(id) {
    return new Promise((reslove, reject) => {
      const sql = "DELETE FROM students WHERE id = ?";
      db.query(sql, id, (err, result) => {
        reslove(result);
      });
    });
  }
}





// export class
module.exports = Student;
