const express = require('express');
const calorieController = require('./calorieController');

const router = express.Router();

router.post('/calorie', calorieController.calculateCalories);

module.exports = router;
