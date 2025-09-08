// Express backend API for Ecotoys
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Ecotoys backend running' });
});

// Placeholder: A/B testing, ad analytics, Amazon logistics endpoints will go here

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Ecotoys backend listening on port ${PORT}`);
});
