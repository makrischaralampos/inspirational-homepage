import React from "react";
import { useSelector } from "react-redux";

const Weather = () => {
  const weather = useSelector((state) => state.weather.data);

  return (
    <div className="weather">
      <h2>Weather</h2>
      <p>{weather.location}</p>
      <p>{weather.temperature}</p>
      <p>{weather.description}</p>
    </div>
  );
};

export default Weather;
