import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextImage } from "../features/backgroundImageSlice";

const BackgroundImage = () => {
  const dispatch = useDispatch();
  const { images, currentImageIndex } = useSelector(
    (state) => state.backgroundImage
  );

  const handleNextImage = () => {
    dispatch(nextImage());
  };

  return (
    <div
      className="background-image"
      style={{ backgroundImage: `url(${images[currentImageIndex].url})` }}
    >
      <button onClick={handleNextImage}>Next Image</button>
      <p>{images[currentImageIndex].description}</p>
    </div>
  );
};

export default BackgroundImage;
