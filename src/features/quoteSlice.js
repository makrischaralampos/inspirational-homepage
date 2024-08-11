import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "The only way to do great work is to love what you do. - Steve Jobs",
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    updateQuote: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { updateQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
