import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "The best way to predict the future is to create it.",
  author: "Peter Drucker",
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    setQuote: (state, action) => {
      state.text = action.payload.text;
      state.author = action.payload.author;
    },
  },
});

export const { setQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
