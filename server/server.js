const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const weatherData = {
      name: response.data.name,
      weather: response.data.weather,
      main: response.data.main,
      wind: response.data.wind,
    };
    res.json(weatherData);
  } catch (err) {
    res.status(500).send("Error fetching weather data");
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
