const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.send('Welcome to the User Home Page!');
});

router.get('/profile', (req, res) => {
  res.send('User Profile Page');
});

router.post('/login', (req, res) => {
  res.send('User Login Endpoint');
});

// Export the router
module.exports = router;
