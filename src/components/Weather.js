import React, { useState } from "react";
import useWeather from "../hooks/useWeather";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Weather = () => {
  const [cityInput, setCityInput] = useState("");
  const { data, status, error, setLocation } = useWeather();

  const handleCityInputChange = (e) => {
    setCityInput(e.target.value);
  };

  const handleCitySubmit = (e) => {
    e.preventDefault();
    if (cityInput.trim()) {
      setLocation(cityInput.trim());
      setCityInput("");
    }
  };

  if (status === "loading") {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        textAlign: "center",
        padding: 2,
        "@media (max-width: 768px)": {
          padding: 1,
          fontSize: "0.8rem",
        },
      }}
    >
      <TextField
        label="Enter City"
        variant="outlined"
        value={cityInput}
        onChange={handleCityInputChange}
        sx={{ mb: 2 }}
        aria-label="Enter City Name"
      />
      <Button
        variant="contained"
        onClick={handleCitySubmit}
        aria-label="Submit City Name"
      >
        Get Weather
      </Button>
      {data ? (
        <>
          <Typography variant="h6">Weather in {data.name}</Typography>
          <Typography variant="body1">{data.weather[0].description}</Typography>
          <Typography variant="body1">{data.main.temp}°C</Typography>
        </>
      ) : (
        <Typography variant="body1">No weather data available</Typography>
      )}
    </Box>
  );
};

export default Weather;
