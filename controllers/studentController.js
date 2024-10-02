
const studentService = require('../services/studentService');

const getAllStudents = (req, res, next) => {
  try {
    const students = studentService.getAllStudents();
    res.status(200).json(students);
  } catch (error) {
    next(error);
  }
};

const getStudentByMatricula = (req, res, next) => {
  try {
    const { matricula } = req.params;
    const student = studentService.getStudentByMatricula(matricula);
    res.status(200).json(student);
  } catch (error) {
    next(error);
  }
};

const createStudent = (req, res, next) => {
  try {
    const { nome, email, matricula } = req.body;
    const student = studentService.createStudent({ nome, email, matricula });
    res.status(201).json(student);
  } catch (error) {
    next(error);
  }
};

const updateStudent = (req, res, next) => {
  try {
    const { matricula } = req.params;
    const updatedData = req.body;
    const updatedStudent = studentService.updateStudent(matricula, updatedData);
    res.status(200).json(updatedStudent);
  } catch (error) {
    next(error);
  }
};

const deleteStudent = (req, res, next) => {
  try {
    const { matricula } = req.params;
    studentService.deleteStudent(matricula);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllStudents,
  getStudentByMatricula,
  createStudent,
  updateStudent,
  deleteStudent,
};
