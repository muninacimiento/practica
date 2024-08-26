const express = require('express')
const clients = require('../controllers/client.controller')
var router = express.Router();

// Get All clients
router.get('/', clients.findAll);

// // Get a Single client
// router.get('/clients/:id', (req, res) => {
//   // Logic to get a single client
// });

// // Create a client
// router.post('/create', clients.create);

// // Update a client
// router.get('/edit/:id', clients.edit);

// router.post('/edit/:id', clients.update);

// Delete a client
router.get('/delete/:id', clients.delete);

module.exports = router;