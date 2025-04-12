import React from "react";

const WeatherCard = ({ data, city }) => {
  const { date, temperature, icon, description } = data;

  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <h3>{date}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p>{description}</p>
      <h4>{temperature}°C</h4>
    </div>
  );
};

export default WeatherCard;
