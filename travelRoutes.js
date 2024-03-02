// travelRoutes.js
const express = require('express');
const router = express.Router();
const travelAgencyController = require('./travelAgencyController');

// Routes
router.get('/', travelAgencyController.getAllAgencies);
router.get('/:id', travelAgencyController.getAgencyById);
router.post('/', travelAgencyController.createAgency);
router.put('/:id', travelAgencyController.updateAgency);
router.patch('/:id', travelAgencyController.partialUpdateAgency);
router.delete('/:id', travelAgencyController.deleteAgency);

module.exports = router;
