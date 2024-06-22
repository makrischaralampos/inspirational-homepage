import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../slices/weatherSlice";
import "./Weather.css";

const Weather = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  let content;

  if (weather.status === "loading") {
    content = <p>Loading...</p>;
  } else if (weather.status === "succeeded") {
    content = (
      <>
        <p className="location">{weather.data.location}</p>
        <p className="temperature">{weather.data.temperature}</p>
        <p className="description">{weather.data.description}</p>
      </>
    );
  } else if (weather.status === "failed") {
    content = <p>{weather.error}</p>;
  }

  return (
    <div className="weather">
      <h2>Weather</h2>
      {content}
    </div>
  );
};

export default Weather;
