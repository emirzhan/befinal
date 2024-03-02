# Travel Agency Project

This project is a simple web application for managing travel agencies. It allows users to view a list of agencies, book trips, and provides weather information for selected cities.

## Installation

1. Clone the repository:
git clone https://github.com/emirzhan/befinal

2. Install dependencies:
npm install express axios mongoose body-parser nodemon

3. Start the server:
node server.js

4. Access the application in your browser at `http://localhost:3000`.
- **View Agencies**: Navigate to the homepage to view a list of travel agencies.
- **Book Trips**: Click on the "Book" button next to an agency to book a trip.
- **Weather Information**: Access weather information for selected cities.

### Admin Access

To access the admin page, follow these steps:

1. Click on the "Admin" button in the navigation bar.
2. Enter the password when prompted.
3. If the password is correct ('admin'), you will be redirected to the admin page.

## Dependencies

- [Express.js](https://expressjs.com/): Web framework for Node.js.
- [Mongoose](https://mongoosejs.com/): MongoDB object modeling tool.
- [Axios](https://github.com/axios/axios): Promise-based HTTP client for the browser and Node.js.

## Folder Structure

project/
│
├── server.js
├── travelRoutes.js
├── travelAgencyController.js
├── TravelAgencyModel.js
├── views/
│   ├── index.html
│   ├── weather.html
│   ├── admin.html
│   └── book.html
├── package.json
└── README.md
