import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchImages, nextImage } from "../slices/imageSlice";
import "./ImageCarousel.css";

const ImageCarousel = () => {
  const dispatch = useDispatch();
  const { images, currentIndex, status, error } = useSelector(
    (state) => state.images
  );

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  let content;

  if (status === "loading") {
    content = <p>Loading...</p>;
  } else if (status === "succeeded") {
    content = (
      <>
        <img
          src={images[currentIndex]}
          alt="Inspirational"
          className="carousel-image"
        />
        <div className="carousel-controls">
          <button className="next-button" onClick={() => dispatch(nextImage())}>
            Next Image
          </button>
        </div>
      </>
    );
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div className="image-carousel">
      <h2>Inspirational Image</h2>
      {content}
    </div>
  );
};

export default ImageCarousel;
