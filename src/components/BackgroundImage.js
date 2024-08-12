import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBackgroundImage } from "../features/backgroundImageSlice";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import "../App.css";

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

  return (
    <Box
      className="background-image"
      sx={{
        backgroundImage: `url(${images[currentImageIndex]?.url})`,
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
      <Typography variant="body1">
        {images[currentImageIndex]?.description}
      </Typography>
    </Box>
  );
};

export default BackgroundImage;
