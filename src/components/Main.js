import React from "react";
import { Grid } from "@mui/material";
import Weather from "./Weather";
import BackgroundImage from "./BackgroundImage";
import Quote from "./Quote";
import Goals from "./Goals";

const Main = () => {
  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Weather />
        </Grid>
        <Grid item xs={12} md={6}>
          <BackgroundImage />
        </Grid>
        <Grid item xs={12}>
          <Quote />
        </Grid>
        <Grid item xs={12}>
          <Goals />
        </Grid>
      </Grid>
    </main>
  );
};

export default Main;
