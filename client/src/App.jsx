import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import './components/styles.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [theme, setTheme] = useState("light");

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeatherData(response.data);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-mode" : "light-mode";
  }, [theme]);

  return (
    <div className="main-app">
      <button className="toggle-button" onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <div className="app-container">
        <h1>Weather Dashboard</h1>
        <SearchBar onSearch={fetchWeather} />
        {weatherData && <WeatherCard data={weatherData} />}
      </div>
    </div>
  );
};

export default App;
