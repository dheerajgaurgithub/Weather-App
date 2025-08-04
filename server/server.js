const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Weather API endpoint
app.get('/api/weather/:city', async (req, res) => {
  try {
    const { city } = req.params;
    const apiKey = process.env.WEATHER_API_KEY;
    
    if (!apiKey) {
      return res.status(500).json({ 
        error: 'API key not configured. Please set WEATHER_API_KEY in your .env file.' 
      });
    }

    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    
    const response = await axios.get(apiUrl);
    const weatherData = response.data;

    // Format the response data for WeatherAPI.com structure
    const formattedData = {
      city: weatherData.location.name,
      country: weatherData.location.country,
      temperature: Math.round(weatherData.current.temp_c),
      description: weatherData.current.condition.text,
      humidity: weatherData.current.humidity,
      windSpeed: weatherData.current.wind_kph,
      icon: weatherData.current.condition.icon,
      feelsLike: Math.round(weatherData.current.feelslike_c),
      pressure: weatherData.current.pressure_mb,
      windDirection: weatherData.current.wind_dir,
      visibility: weatherData.current.vis_km,
      uvIndex: weatherData.current.uv
    };

    res.json(formattedData);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    
    if (error.response && error.response.status === 400) {
      res.status(404).json({ error: 'City not found. Please check the city name and try again.' });
    } else if (error.response && error.response.status === 401) {
      res.status(401).json({ error: 'Invalid API key. Please check your WeatherAPI.com API key.' });
    } else if (error.response && error.response.status === 403) {
      res.status(403).json({ error: 'API key exceeded quota or access denied.' });
    } else {
      res.status(500).json({ error: 'Failed to fetch weather data. Please try again later.' });
    }
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
