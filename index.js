const express = require('express');
const app = express();

// Enable CORS for FCC testing
const cors = require('cors');
app.use(cors());

// Root
app.get('/', (req, res) => {
  res.send('Hello from Header Parser Microservice!');
});

// whoami endpoint
app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent'],
  });
});

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
