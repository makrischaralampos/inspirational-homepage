import React from "react";
import { useSelector } from "react-redux";

const Weather = () => {
  const weather = useSelector((state) => state.weather);

  return (
    <div className="weather">
      <h2>Current Weather</h2>
      <p>Temperature: {weather.temperature}°F</p>
      <p>Condition: {weather.condition}</p>
      <p>{weather.icon}</p>
    </div>
  );
};

export default Weather;
