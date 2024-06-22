import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "3ca6f11ae33a9f8e54adc338fbaec4fa";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=San Francisco&units=metric&appid=${API_KEY}`;

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    status: "idle",
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
        state.data = {
          location: action.payload.name,
          temperature: `${action.payload.main.temp}°C`,
          description: action.payload.weather[0].description,
        };
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
