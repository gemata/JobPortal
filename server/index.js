const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use the specified port or default to 3000

// Middleware to parse incoming JSON requests
app.use(express.json());

// Example route to handle GET requests
app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

// Example route to handle POST requests
app.post('/api/data', (req, res) => {
  const data = req.body;
  // Process the data and send a response
  res.json({ message: 'Data received successfully!', data });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
