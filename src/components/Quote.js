import React from "react";
import { useSelector } from "react-redux";

const Quote = () => {
  const quote = useSelector((state) => state.quote);

  return (
    <div className="quote">
      <h2>Inspirational Quote</h2>
      <p>"{quote.text}"</p>
      <p>- {quote.author}</p>
    </div>
  );
};

export default Quote;
