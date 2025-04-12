import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);

    const dailyData = response.data.list.filter(item => item.dt_txt.includes("12:00:00"));

    const forecast = dailyData.map(item => ({
      date: item.dt_txt.split(' ')[0],
      temperature: item.main.temp,
      icon: item.weather[0].icon,
      description: item.weather[0].description,
      humidity: item.main.humidity,      // Added humidity
      windSpeed: item.wind.speed        // Added wind speed
    }));

    res.json({
      city: response.data.city.name,
      forecast: forecast
    });
  } catch (err) {
    console.error("Weather fetch failed:", err);
    res.status(500).json({ error: "Unable to fetch weather data" });
  }
});

export default router;
