const student = require("../models/studentModel");

const getStudents = async () => {
  return (listOfStudents = await student.find());
};

const createNewStudent = async (studentData) => {
  const newStudent = await student.create(studentData);
  return newStudent;
};

const updateExistingStudent = async (studentId, studentData) => {
  return await student.findByIdAndUpdate(studentId, studentData, {
    new: true,
    runValidators: true,
  });
};

const patchStudentData = async (studentId, studentData) => {
  return await student.findByIdAndUpdate(
    studentId,
    { $set: studentData },
    { new: true, runValidators: true }
  );
};

const deleteStudentData = async (studentId) => {
  return await student.findByIdAndDelete(studentId);
};

module.exports = {
  getStudents,
  createNewStudent,
  updateExistingStudent,
  patchStudentData,
  deleteStudentData,
};
