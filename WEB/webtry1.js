// backend.js (Node.js example)
const express = require('express');
const app = express();

// Route to handle GET request for /api/data
app.get('/api/data', (req, res) => {
    // Logic to fetch data from the database or perform any other operation
    const data = { message: 'Hello from the backend!' };

    // Send JSON response back to the client
    res.json(data);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
