const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5454;

app.use(cors()); // Enable CORS middleware

// Define the /flip endpoint
app.get('/flip', (req, res) => {
    const result = Math.ceil(Math.random() * 2 === 1 ? 'heads' : 'tails') 

     // Send JSON response
    res.json({ result }); // Send JSON response
})

// Serve static files from the public directory
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}.`);
})


 