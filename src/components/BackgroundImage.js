import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBackgroundImage } from "../features/backgroundImageSlice";

const BackgroundImage = () => {
  const dispatch = useDispatch();
  const { images, currentImageIndex, status, error } = useSelector(
    (state) => state.backgroundImage
  );

  useEffect(() => {
    dispatch(fetchBackgroundImage()); // Fetch the first background image
  }, [dispatch]);

  const handleNextImage = () => {
    if (status !== "loading") {
      dispatch(fetchBackgroundImage()); // Fetch the next image
    }
  };

  if (status === "loading" && images.length === 0) {
    return <div className="background-image">Loading background image...</div>;
  }

  if (status === "failed") {
    return <div className="background-image">Error: {error}</div>;
  }

  return (
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${images[currentImageIndex]?.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <button onClick={handleNextImage} disabled={status === "loading"}>
        Next Image
      </button>
      <p>{images[currentImageIndex]?.description}</p>
    </div>
  );
};

export default BackgroundImage;
