const { getStudentDetails } = require('../services/student.service');

const getStudentInfo = (req, res) => {
  const student = getStudentDetails();
  res.json(student);
};

module.exports = {
  getStudentInfo
};
