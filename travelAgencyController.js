// travelAgencyController.js
const TravelAgency = require('./TravelAgencyModel');

// Controller functions
exports.getAllAgencies = async (req, res) => {
  try {
    const agencies = await TravelAgency.find();
    res.json(agencies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAgencyById = async (req, res) => {
  try {
    const agency = await TravelAgency.findById(req.params.id);
    if (!agency) {
      return res.status(404).json({ message: 'Agency not found' });
    }
    res.json(agency);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createAgency = async (req, res) => {
  const { name, location, contact } = req.body;
  try {
    const newAgency = new TravelAgency({ name, location, contact });
    await newAgency.save();
    res.status(201).json(newAgency);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateAgency = async (req, res) => {
  try {
    const { name, location, contact } = req.body;
    const agency = await TravelAgency.findById(req.params.id);
    if (!agency) {
      return res.status(404).json({ message: 'Agency not found' });
    }
    agency.name = name;
    agency.location = location;
    agency.contact = contact;
    await agency.save();
    res.json(agency);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.partialUpdateAgency = async (req, res) => {
  try {
    const { name, location, contact } = req.body;
    const agency = await TravelAgency.findById(req.params.id);
    if (!agency) {
      return res.status(404).json({ message: 'Agency not found' });
    }
    if (name) agency.name = name;
    if (location) agency.location = location;
    if (contact) agency.contact = contact;
    await agency.save();
    res.json(agency);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteAgency = async (req, res) => {
  try {
      const agencyId = req.params.id;
      const deletedAgency = await TravelAgency.findByIdAndDelete(agencyId);
      if (!deletedAgency) {
          return res.status(404).json({ error: 'Agency not found' });
      }
      res.status(200).json({ message: 'Agency deleted successfully' });
  } catch (error) {
      console.error('Error deleting agency:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};
