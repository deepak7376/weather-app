const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const apiKey = '666e67ccd9e754307312251d498d64ae';

app.use(cors());

app.get('/weather/:location', async (req, res) => {
  try {
    const location = req.params.location;
    const weatherData = await getWeatherData(location);
    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

async function getWeatherData(location) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  const response = await axios.get(apiUrl);
  return response.data;
}

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
