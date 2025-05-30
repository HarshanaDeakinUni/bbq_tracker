const express = require('express');
const router = express.Router();
const studentController  = require('../controllers/student.controller');

// router.get('/', usersController.getUsers);
// router.post('/', usersController.addUser);
router.get('/', studentController.getStudentInfo);

module.exports = router;