const StudentController = require("../controllers/StudentController");

const express = require("express");

const router = express.Router();

// buat routing student
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

// export routing
module.exports = router;
