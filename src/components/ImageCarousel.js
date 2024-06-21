import React, { useState } from "react";

const mockImages = [
  "https://via.placeholder.com/800x400?text=Inspirational+Image+1",
  "https://via.placeholder.com/800x400?text=Inspirational+Image+2",
  "https://via.placeholder.com/800x400?text=Inspirational+Image+3",
];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % mockImages.length);
  };

  return (
    <div className="image-carousel">
      <h2>Inspirational Image</h2>
      <img src={mockImages[currentImageIndex]} alt="Inspirational" />
      <button onClick={nextImage}>Next Image</button>
    </div>
  );
};

export default ImageCarousel;
