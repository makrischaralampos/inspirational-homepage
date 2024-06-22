import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    location: "San Francisco",
    temperature: "20°C",
    description: "Sunny",
  },
  status: "idle",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
