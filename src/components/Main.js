import React from "react";
import Weather from "./Weather";
import BackgroundImage from "./BackgroundImage";
import Quote from "./Quote";
import Goals from "./Goals";

const Main = () => {
  return (
    <main>
      <Weather />
      <BackgroundImage />
      <Quote />
      <Goals />
    </main>
  );
};

export default Main;
