import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../slices/weatherSlice";
import imageReducer from "../slices/imageSlice";
import quoteReducer from "../slices/quoteSlice";
import goalsReducer from "../slices/goalsSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    images: imageReducer,
    quote: quoteReducer,
    goals: goalsReducer,
  },
});

export default store;
