import React, { useState } from "react";

const BackgroundImage = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="background-image"
      style={{ backgroundImage: `url(${images[currentImage].url})` }}
    >
      <button onClick={nextImage}>Next Image</button>
      <p>{images[currentImage].description}</p>
    </div>
  );
};

export default BackgroundImage;
