const express = require('express');

const {
  recommendEmployee,
} = require('../controllers/aiController');

const router = express.Router();

router.post('/recommend', recommendEmployee);

module.exports = router;