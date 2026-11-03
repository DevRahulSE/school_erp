const {
  getStudents,
  createNewStudent,
  updateExistingStudent,
  patchStudentData,
  deleteStudentData,
} = require("../services/studentService");
const { handleSuccess, handleError } = require("../utils/envelope");

const getStudent = async (req, res) => {
  try {
    const listOfStudents = await getStudents();
    return handleSuccess({ res, students: listOfStudents });
  } catch (error) {
    return handleError({
      res,
      message: "Failed to fetch students",
    });
  }
};

const createStudent = async (req, res) => {
  try {
    const newStudent = await createNewStudent(req.body);
    return handleSuccess({
      res,
      message: "Student created successfully",
      student: newStudent,
    });
  } catch (error) {
    handleError({ res, message: "Failed to create student" });
  }
};

const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await updateExistingStudent(req.params.id, req.body);

    if (!updateStudent) {
      return handleError({
        res,
        statusCode: 404,
        message: "Student not found",
      });
    }

    return handleSuccess({
      res,
      message: "Student updated successfully",
      student: updatedStudent,
    });
  } catch (error) {
    handleError({ res, message: "Failed to updated student" });
  }
};

const patchStudent = async (req, res) => {
  try {
    const updatedStudent = await patchStudentData(req.params.id, req.body);
    if (!updateStudent) {
      return handleError({
        res,
        statusCode: 404,
        message: "Student not found",
      });
    }
    return handleSuccess({
      res,
      message: "Student updated successfully",
      student: updatedStudent,
    });
  } catch (error) {
    handleError({ res, message: "Failed to updated student" });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const removeStudent = await deleteStudentData(req.params.id);
    if (!removeStudent) {
      return res.status(404).json({
        message: "Student not found",
      });
    }
    return handleSuccess({
      res,
      message: "Student deleted successfully",
      student: removeStudent,
    });
  } catch (error) {
    handleError({ res, message: "Failed to remove student" });
  }
};

module.exports = {
  getStudent,
  createStudent,
  updateStudent,
  patchStudent,
  deleteStudent,
};
