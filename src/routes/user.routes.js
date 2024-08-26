const express = require('express')
const users = require('../controllers/user.controller')
var router = express.Router();

// Get All hours
router.get('/', (req, res) => {res.render('user/user')});

// // Get a Single hour
// router.get('/:id', users.findOne);

// Create a hour
router.post('/create', users.create);
router.post('/create/extranjero', users.createForeign);

// // Update a hour
// router.get('/edit/:id', hours.edit);

// router.post('/edit/:id', hours.update);

// // Delete a hour
// router.get('/delete/:id', hours.delete);

module.exports = router;