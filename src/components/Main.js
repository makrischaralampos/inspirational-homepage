import React from "react";
import Weather from "./Weather";
import BackgroundImage from "./BackgroundImage";
import Quote from "./Quote";
import Goals from "./Goals";

const mockWeatherData = {
  temperature: 72,
  condition: "Sunny",
  icon: "☀️",
};

const mockImages = [
  {
    id: 1,
    url: "https://example.com/image1.jpg",
    description: "Inspiring Image 1",
  },
  {
    id: 2,
    url: "https://example.com/image2.jpg",
    description: "Inspiring Image 2",
  },
];

const mockQuote =
  "The only way to do great work is to love what you do. - Steve Jobs";

const mockGoals = [
  { id: 1, text: "Finish React project", completed: false },
  { id: 2, text: "Read a book", completed: false },
  { id: 3, text: "Exercise for 30 minutes", completed: true },
];

const Main = () => {
  return (
    <main>
      <Weather data={mockWeatherData} />
      <BackgroundImage images={mockImages} />
      <Quote text={mockQuote} />
      <Goals initialGoals={mockGoals} />
    </main>
  );
};

export default Main;
