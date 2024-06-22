import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;
const API_URL = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&count=10`;

export const fetchImages = createAsyncThunk("images/fetchImages", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const imageSlice = createSlice({
  name: "images",
  initialState: {
    images: [],
    currentIndex: 0,
    status: "idle",
    error: null,
  },
  reducers: {
    nextImage: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.images.length;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.images = action.payload.map((image) => image.urls.regular);
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { nextImage } = imageSlice.actions;
export default imageSlice.reducer;
