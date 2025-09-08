// Express backend API for Ecotoys
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


const fs = require('fs');
const path = require('path');

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Ecotoys backend running' });
});

// Products endpoint
app.get('/api/products', (req, res) => {
  const productsPath = path.join(__dirname, 'products.json');
  fs.readFile(productsPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Could not load products' });
    }
    res.json(JSON.parse(data));
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Ecotoys backend listening on port ${PORT}`);
});
