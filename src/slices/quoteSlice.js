import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.quotable.io/random";

export const fetchQuote = createAsyncThunk("quote/fetchQuote", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    text: "",
    author: "",
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.text = action.payload.content;
        state.author = action.payload.author;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default quoteSlice.reducer;
