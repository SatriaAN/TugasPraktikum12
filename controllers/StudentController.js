// import student
const Student = require("../models/Student");

class StudentController {
  // membuat async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all(function (result) {
      const data = {
        message: "Menampilkan data student",
        data: result,
      };
      res.json(data);
    });
  }

  // Membuat fungsi store untuk menambahkan data
  // Menggunakan Async Await
  async store(req, res) {
    const students = await Student.create(req.body);
    const data = {
      message: `Menambahkan data student`,
      data: students,
    };
    res.json(data);
  }

  async update(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      const studentUpdated = await Student.update(id, req.body);
      const data = {
        message: `Menampilkan semua student`,
        data: studentUpdated,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: `Student not found`,
      };

      res.status(404).json(data);
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      await Student.delete(id);
      const data = {
        message: `Menghapus data student`,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: `Student not found`,
      };
      res.status(404).json(data);
    }
  }

  async show(req, res) {
    // cari id
    // jika ada , kirim data
    // jika tidak, Kirim data tidak ada
    const { id } = req.params;

    const student = await Student.find(id);

    if (student) {
      const data = {
        message: "Menampilkan data student",
        data: student,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: "Data student tidak ada",
      };
      res.status(404).json(data);
    }
  }
}

// buat object Student Controller
const object = new StudentController();

// export object
module.exports = object;
