import React from "react";

const Weather = ({ data }) => {
  return (
    <div className="weather">
      <h2>Current Weather</h2>
      <p>Temperature: {data.temperature}°F</p>
      <p>Condition: {data.condition}</p>
      <p>{data.icon}</p>
    </div>
  );
};

export default Weather;
