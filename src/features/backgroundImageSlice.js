import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [
    {
      id: 1,
      url: "https://example.com/image1.jpg",
      description: "Inspiring Image 1",
    },
    {
      id: 2,
      url: "https://example.com/image2.jpg",
      description: "Inspiring Image 2",
    },
  ],
  currentImageIndex: 0,
};

const backgroundImageSlice = createSlice({
  name: "backgroundImage",
  initialState,
  reducers: {
    nextImage: (state) => {
      state.currentImageIndex =
        (state.currentImageIndex + 1) % state.images.length;
    },
  },
});

export const { nextImage } = backgroundImageSlice.actions;
export default backgroundImageSlice.reducer;
