import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../features/weatherSlice";
import backgroundImageReducer from "../features/backgroundImageSlice";
import quoteReducer from "../features/quoteSlice";
import goalsReducer from "../features/goalsSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    backgroundImage: backgroundImageReducer,
    quote: quoteReducer,
    goals: goalsReducer,
  },
});
