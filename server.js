const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const axios = require('axios'); // Import axios for making HTTP requests
const travelRoutes = require('./travelRoutes');
const travelAgencyController = require('./travelAgencyController');

const app = express();
const port = 3000;

// Middleware for Weather API
app.use('/api/weather', bodyParser.urlencoded({ extended: false }));
app.use('/api/weather', bodyParser.json());

// Middleware for Agency List
app.use('/travelagency', bodyParser.urlencoded({ extended: true }));
app.use('/travelagency', bodyParser.json());

app.use(express.static('views'));

// Connect to MongoDB
mongoose.connect('mongodb+srv://emirzhancool:qawsedrf@cluster0.1pyshpl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Weather API endpoint
app.get('/api/weather', async (req, res) => {
    try {
        let apiKey = 'f0b917381c4240aaa45111118241701';
        let city = req.query.city;
        let link = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
        const response = await axios.get(link);

        const weatherData = {
            location: response.data.location.name,
            temperature: response.data.current.temp_c,
            humidity: response.data.current.humidity,
            wind_kph: response.data.current.wind_kph,
        };

        res.json(weatherData);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Routes
app.use('/travelagency', travelRoutes);

// Handle form submissions for Agency List
app.post('/create', travelAgencyController.createAgency);
app.put('/update/:id', travelAgencyController.updateAgency);
app.delete('/delete/:id', travelAgencyController.deleteAgency);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
