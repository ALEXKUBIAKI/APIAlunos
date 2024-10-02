
const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();

router.get('/', studentController.getAllStudents);
router.get('/:matricula', studentController.getStudentByMatricula);
router.post('/', studentController.createStudent);
router.put('/:matricula', studentController.updateStudent);
router.delete('/:matricula', studentController.deleteStudent);

module.exports = router;
