import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const searchWeather = async (e) => {
    e.preventDefault()
    if (!city.trim()) {
      setError('Please enter a city name')
      return
    }

    setLoading(true)
    setError('')
    setWeather(null)

    try {
      const response = await axios.get(`/api/weather/${encodeURIComponent(city.trim())}`)
      setWeather(response.data)
    } catch (error) {
      console.error('Error fetching weather:', error)
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error)
      } else {
        setError('Failed to fetch weather data. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  const getWeatherIconUrl = (icon) => {
    // WeatherAPI.com provides full URLs for icons, but we need to ensure it's https
    return icon.startsWith('//') ? `https:${icon}` : icon
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>🌤️ Weather App</h1>
          <p>Get current weather information for any city</p>
        </header>

        <form onSubmit={searchWeather} className="search-form">
          <div className="search-container">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name..."
              className="search-input"
              disabled={loading}
            />
            <button type="submit" className="search-button" disabled={loading}>
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>

        {error && (
          <div className="error-message">
            <span>❌ {error}</span>
          </div>
        )}

        {weather && (
          <div className="weather-card">
            <div className="weather-header">
              <div className="location">
                <h2>{weather.city}, {weather.country}</h2>
              </div>
              <div className="weather-icon">
                <img 
                  src={getWeatherIconUrl(weather.icon)} 
                  alt={weather.description}
                  title={weather.description}
                />
              </div>
            </div>

            <div className="temperature">
              <span className="temp-value">{weather.temperature}°C</span>
              <span className="temp-description">{weather.description}</span>
            </div>

            <div className="weather-details">
              <div className="detail-item">
                <span className="detail-label">Feels like</span>
                <span className="detail-value">{weather.feelsLike}°C</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Humidity</span>
                <span className="detail-value">{weather.humidity}%</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Wind Speed</span>
                <span className="detail-value">{weather.windSpeed} km/h</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Pressure</span>
                <span className="detail-value">{weather.pressure} hPa</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
