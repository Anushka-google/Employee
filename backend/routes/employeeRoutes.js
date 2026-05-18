const express = require('express');

const {
  addEmployee,
  getEmployees,
  searchEmployee,
  deleteEmployee,
} = require('../controllers/employeeController');

const router = express.Router();

router.post('/', addEmployee);

router.get('/', getEmployees);

router.get('/search', searchEmployee);

router.delete('/:id', deleteEmployee);

module.exports = router;