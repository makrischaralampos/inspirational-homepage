import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextImage } from "../slices/imageSlice";

const ImageCarousel = () => {
  const dispatch = useDispatch();
  const { images, currentIndex } = useSelector((state) => state.images);

  return (
    <div className="image-carousel">
      <h2>Inspirational Image</h2>
      <img src={images[currentIndex]} alt="Inspirational" />
      <button onClick={() => dispatch(nextImage())}>Next Image</button>
    </div>
  );
};

export default ImageCarousel;
