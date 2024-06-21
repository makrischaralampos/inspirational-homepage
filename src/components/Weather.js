import React from "react";

const mockWeatherData = {
  location: "San Francisco",
  temperature: "20°C",
  description: "sunny",
};

const Weather = () => (
  <div className="weather">
    <h2>Weather</h2>
    <p>{mockWeatherData.location}</p>
    <p>{mockWeatherData.temperature}</p>
    <p>{mockWeatherData.description}</p>
  </div>
);

export default Weather;
