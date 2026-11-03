const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
});
const Student = mongoose.model("Students", studentSchema);
module.exports = Student;
