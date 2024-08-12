import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Inspirational Homepage. All rights
        reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
