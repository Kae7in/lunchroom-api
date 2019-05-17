const express = require('express');
const next = require('next');
const router = express.Router();
var cors = require('cors');
const PORT = 3000;
const HOST = '0.0.0.0';
const app = express();

app.use(cors({
  origin: 'http://localhost:4000'
}));

app.get('/api', (req, res) => {
  res.json({ a: 1 });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
