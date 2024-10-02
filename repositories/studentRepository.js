
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/students.json');

const getAllStudents = () => {
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
};

const getStudentByMatricula = (matricula) => {
  const students = getAllStudents();
  return students.find(student => student.matricula === matricula);
};

const createStudent = (studentData) => {
  const students = getAllStudents();
  students.push(studentData);
  fs.writeFileSync(dataPath, JSON.stringify(students, null, 2));
  return studentData;
};

const updateStudent = (matricula, updatedData) => {
  const students = getAllStudents();
  const index = students.findIndex(student => student.matricula === matricula);
  if (index === -1) return null;
  
  students[index] = { ...students[index], ...updatedData };
  fs.writeFileSync(dataPath, JSON.stringify(students, null, 2));
  return students[index];
};

const deleteStudent = (matricula) => {
  const students = getAllStudents();
  const newStudents = students.filter(student => student.matricula !== matricula);
  
  if (students.length === newStudents.length) return null;

  fs.writeFileSync(dataPath, JSON.stringify(newStudents, null, 2));
  return true;
};

module.exports = {
  getAllStudents,
  getStudentByMatricula,
  createStudent,
  updateStudent,
  deleteStudent,
};
