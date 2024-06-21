import React from "react";

const mockQuote = {
  text: "The best way to predict the future is to create it.",
  author: "Peter Drucker",
};

const Quote = () => (
  <div className="quote">
    <h2>Inspirational Quote</h2>
    <p>"{mockQuote.text}"</p>
    <p>- {mockQuote.author}</p>
  </div>
);

export default Quote;
