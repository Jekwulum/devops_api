const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5012;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  const message = `Welcome to the ${process.env.APP_NAME} API!`;
  res.status(200).json({ message });
});

app.get('/health', (req, res) => {
  const message = 'Server is UP and running! ✅';
  res.status(200).json({ message });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
