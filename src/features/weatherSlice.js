import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  temperature: 72,
  condition: "Sunny",
  icon: "☀️",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    updateWeather: (state, action) => {
      state.temperature = action.payload.temperature;
      state.condition = action.payload.condition;
      state.icon = action.payload.icon;
    },
  },
});

export const { updateWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
