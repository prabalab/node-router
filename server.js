const express = require('express');
const app = express();
const userRoutes = require('./routers/userRoutes'); // Import the router

// Middleware to parse JSON data
app.use(express.json());

// Use the router
app.use('/users', userRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
