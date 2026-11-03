const express = require("express");
const router = express.Router();
const {
  getStudent,
  createStudent,
  updateStudent,
  patchStudent,
  deleteStudent,
} = require("../controllers/studentController");
router.get("/", getStudent);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.patch("/:id", patchStudent);
router.delete("/:id", deleteStudent);
module.exports = router;
