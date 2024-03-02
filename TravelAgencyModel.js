// TravelAgencyModel.js
const mongoose = require('mongoose');

const travelAgencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  }
});

const TravelAgency = mongoose.model('TravelAgency', travelAgencySchema);

module.exports = TravelAgency;
