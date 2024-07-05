const express = require('express');
const path = require('path');

const app = express();
const port = 8000; // Choose any available port

// Serve static files from the 'public' directory with base path '/flightsimulator'
app.use('/flightsimulator', express.static(path.join(__dirname, 'FlightSimulator')));

// Start the server
app.listen(port, () => {
    console.log(`Server is running and serving '/flightsimulator' on http://localhost:${port}`);
});
