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

  async store(req, res) {
    const { nama , nim , email } = req.body;
    const students = await Student.create(req.body);
      const data = {
        message: `Menambahkan data student ${nama}`,
        data: students,
      };
      res.json(data);
    };
  

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    const data = {
      message: `Mengedit data student id ${id}, nama ${nama}`,
      data: [],
    };
    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    const data = {
      message: `Menghapus data student ${id}`,
      data: [],
    };
    res.json(data);
  }
}

// buat object Student Controller
const object = new StudentController();

// export object
module.exports = object;
