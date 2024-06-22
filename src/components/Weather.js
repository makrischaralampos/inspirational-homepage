import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../slices/weatherSlice";

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
        <p>{weather.data.location}</p>
        <p>{weather.data.temperature}</p>
        <p>{weather.data.description}</p>
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
