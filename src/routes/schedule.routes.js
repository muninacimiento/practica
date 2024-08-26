const express = require('express')
const schedule = require('../controllers/schedule.controller')
var router = express.Router();

// Get All hours
// router.get('/usuario', schedule.find);
router.get('/', schedule.findAll)

// // Get hour
router.get('/buscar', schedule.find);

// Create a hour
router.post('/create/:id', schedule.create);

// // Update a hour
// router.get('/edit/:id', hours.edit);

// router.post('/edit/:id', hours.update);

// Delete a hour
router.get('/delete/:id', schedule.delete);

module.exports = router;