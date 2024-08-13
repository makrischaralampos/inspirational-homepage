import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// Fetch weather data using coordinates (latitude and longitude)
export const fetchWeatherByCoords = createAsyncThunk(
  "weather/fetchWeatherByCoords",
  async ({ latitude, longitude }) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
    );
    return response.data;
  }
);

// Fetch weather data using a manually entered city name
export const fetchWeatherByCity = createAsyncThunk(
  "weather/fetchWeatherByCity",
  async (cityName) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
    );
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    status: "idle", // idle || loading || succeeded || failed
    error: null,
    location: null, // To store the manually entered location
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload; // Set the manually entered location
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherByCoords.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeatherByCoords.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchWeatherByCoords.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchWeatherByCity.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeatherByCity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchWeatherByCity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setLocation } = weatherSlice.actions;

export default weatherSlice.reducer;
