import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// Async thunk for fetching weather data
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
    );
    return {
      temperature: response.data.main.temp,
      condition: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    };
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    temperature: null,
    condition: "",
    icon: "",
    status: "idle", // idle || loading || succeeded || failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.temperature = action.payload.temperature;
        state.condition = action.payload.condition;
        state.icon = action.payload.icon;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
