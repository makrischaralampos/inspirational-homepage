import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../features/weatherSlice";

const Weather = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  const { temperature, condition, icon, status, error } = weather;

  useEffect(() => {
    dispatch(fetchWeather("New York")); // Fetch weather for a default city
  }, [dispatch]);

  if (status === "loading") {
    return <div className="weather">Loading weather data...</div>;
  }

  if (status === "failed") {
    return <div className="weather">Error: {error}</div>;
  }

  return (
    <div className="weather">
      <h2>Current Weather</h2>
      {temperature !== null ? (
        <>
          <p>Temperature: {temperature}°F</p>
          <p>Condition: {condition}</p>
          <img src={icon} alt={condition} />
        </>
      ) : (
        <p>No weather data available.</p>
      )}
    </div>
  );
};

export default Weather;
