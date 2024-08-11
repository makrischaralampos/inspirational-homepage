import React from "react";

const Quote = ({ text }) => {
  return (
    <div className="quote">
      <h2>Inspirational Quote</h2>
      <p>"{text}"</p>
    </div>
  );
};

export default Quote;
