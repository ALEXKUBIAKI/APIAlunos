
const studentRepository = require('../repositories/studentRepository');

const getAllStudents = () => {
  return studentRepository.getAllStudents();
};

const getStudentByMatricula = (matricula) => {
  const student = studentRepository.getStudentByMatricula(matricula);
  if (!student) throw new Error('Aluno não encontrado.');
  return student;
};

const createStudent = (studentData) => {
  const existingStudent = studentRepository.getStudentByMatricula(studentData.matricula);
  if (existingStudent) throw new Error('Matrícula já cadastrada.');
  return studentRepository.createStudent(studentData);
};

const updateStudent = (matricula, updatedData) => {
  const student = studentRepository.updateStudent(matricula, updatedData);
  if (!student) throw new Error('Aluno não encontrado.');
  return student;
};

const deleteStudent = (matricula) => {
  const student = studentRepository.deleteStudent(matricula);
  if (!student) throw new Error('Aluno não encontrado.');
};

module.exports = {
  getAllStudents,
  getStudentByMatricula,
  createStudent,
  updateStudent,
  deleteStudent,
};
