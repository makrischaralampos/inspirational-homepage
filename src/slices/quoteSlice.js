import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    data: null,
    status: "idle",
  },
  reducers: {
    setQuote: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
