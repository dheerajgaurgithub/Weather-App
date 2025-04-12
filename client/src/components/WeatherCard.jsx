import React from "react";

const WeatherCard = ({ data }) => {
  console.log("Icon Data:", data.icon);  
  return (
    <div className="weather-card">
      <h2>{data.city}</h2>
      <img
      src={`https://openweathermap.org/img/wn/01d@2x.png`}
      alt={data.description}
      />

      <h3>{data.temperature}°C</h3>
      <p>{data.description}</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind: {data.windSpeed} km/h</p>
    </div>
  );
};


export default WeatherCard;
