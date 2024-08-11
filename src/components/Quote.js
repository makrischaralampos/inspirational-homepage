import React from "react";
import { useSelector } from "react-redux";

const Quote = () => {
  const quote = useSelector((state) => state.quote.text);

  return (
    <div className="quote">
      <h2>Inspirational Quote</h2>
      <p>"{quote}"</p>
    </div>
  );
};

export default Quote;
