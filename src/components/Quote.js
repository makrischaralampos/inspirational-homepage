import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuote } from "../features/quoteSlice";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Quote = () => {
  const dispatch = useDispatch();
  const { text, status, error } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <Box sx={{ p: 2, textAlign: "center" }}>
      <Typography variant="h6">{text}</Typography>
    </Box>
  );
};

export default Quote;
