const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle incoming messages from client
app.post('/message', (req, res) => {
    // Handle the incoming message and generate a response from the chatbot AI
    const response = 'This is a placeholder response from the chatbot AI';
    res.send(response);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
