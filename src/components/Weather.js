import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../features/weatherSlice";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Weather = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  const { temperature, condition, icon, status, error } = weather;

  useEffect(() => {
    dispatch(fetchWeather("New York")); // Fetch weather for a default city
  }, [dispatch]);

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
      <Typography variant="h6">
        The current temperature is {temperature}°C
      </Typography>
      <Typography variant="body1">{condition}</Typography>
      <img src={icon} alt={condition} />
    </Box>
  );
};

export default Weather;
