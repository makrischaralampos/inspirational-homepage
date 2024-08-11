import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

// Async thunk for fetching a random background image
export const fetchBackgroundImage = createAsyncThunk(
  "backgroundImage/fetchBackgroundImage",
  async () => {
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?query=inspiration&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    return {
      url: response.data.urls.regular,
      description: response.data.alt_description || "Inspiring Image",
    };
  }
);

const backgroundImageSlice = createSlice({
  name: "backgroundImage",
  initialState: {
    images: [],
    currentImageIndex: 0,
    status: "idle", // idle | loading | succeede | failed
    error: null,
  },
  reducers: {
    nextImage: (state) => {
      state.currentImageIndex =
        (state.currentImageIndex + 1) % state.images.length;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBackgroundImage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBackgroundImage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.images.push(action.payload);
        state.currentImageIndex = state.images.length - 1;
      })
      .addCase(fetchBackgroundImage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { nextImage } = backgroundImageSlice.actions;
export default backgroundImageSlice.reducer;
