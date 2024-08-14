import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBackgroundImage } from "../features/backgroundImageSlice";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LazyLoad from "react-lazyload";
import "../App.css";

const BackgroundImage = () => {
  const dispatch = useDispatch();
  const { images, currentImageIndex, status, error } = useSelector(
    (state) => state.backgroundImage
  );
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    dispatch(fetchBackgroundImage()); // Fetch the first background image
  }, [dispatch]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNextImage = useCallback(() => {
    if (status !== "loading") {
      dispatch(fetchBackgroundImage()); // Fetch the next image
    }
  });

  // Auto-cycle background images every 10 seconds
  useEffect(() => {
    const cycleInterval = setInterval(() => {
      handleNextImage();
    }, 10000);

    return () => clearInterval(cycleInterval);
  }, [currentImageIndex, handleNextImage]);

  const toggleFavorite = (image) => {
    let updatedFavorites = [];
    if (favorites.find((fav) => fav.url === image.url)) {
      updatedFavorites = favorites.filter((fav) => fav.url !== image.url);
    } else {
      updatedFavorites = [...favorites, image];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (status === "loading" && images.length === 0) {
    return (
      <Box
        className="background-image"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (status === "failed") {
    return <div className="background-image">Error: {error}</div>;
  }

  const currentImage = images[currentImageIndex];

  return (
    <LazyLoad height={200} offset={100} once>
      <Box
        className="background-image"
        sx={{
          backgroundImage: `url(${currentImage?.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: 3,
          color: "#fff",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
          "@media (max-width: 768px)": {
            padding: 2,
            justifyContent: "center",
          },
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleNextImage}
          disabled={status === "loading"}
          sx={{ mb: 2 }}
        >
          Next Image
        </Button>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          {currentImage?.description}
        </Typography>
        <IconButton
          color="secondary"
          onClick={() => toggleFavorite(currentImage)}
          sx={{ mt: 2 }}
        >
          {favorites.find((fav) => fav.url === currentImage?.url) ? (
            <FavoriteIcon />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </Box>
    </LazyLoad>
  );
};

export default BackgroundImage;
