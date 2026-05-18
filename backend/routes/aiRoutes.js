const express = require('express');

const {
  recommendEmployee,
} = require('../controllers/aiController');

const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/recommend', protect, recommendEmployee);

module.exports = router;