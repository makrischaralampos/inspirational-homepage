import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [
    "https://via.placeholder.com/800x400?text=Inspirational+Image+1",
    "https://via.placeholder.com/800x400?text=Inspirational+Image+2",
    "https://via.placeholder.com/800x400?text=Inspirational+Image+3",
  ],
  currentIndex: 0,
};

const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    nextImage: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.images.length;
    },
  },
});

export const { nextImage } = imageSlice.actions;
export default imageSlice.reducer;
