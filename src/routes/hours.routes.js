const express = require('express')
const hours = require('../controllers/hours.controller')
var router = express.Router();

// Get All hours
router.get('/', hours.findAll);

// Get a Single hour
router.get('/buscar', hours.find);

// Create a hour
router.post('/create', hours.create);

// Update a hour
router.get('/edit/:id', hours.edit);

router.post('/edit/:id', hours.update);

// Delete a hour
router.get('/delete/:id', hours.delete);
router.get('/delete', hours.deleteDates);

module.exports = router;