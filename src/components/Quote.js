import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuote } from "../features/quoteSlice";

const Quote = () => {
  const dispatch = useDispatch();
  const { text, status, error } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  if (status === "loading") {
    return <div className="quote">Loading quote...</div>;
  }

  if (status === "failed") {
    return <div className="quote">Error: {error}</div>;
  }

  return (
    <div className="quote">
      <h2>Inspirational Quote</h2>
      <p>"{text}"</p>
    </div>
  );
};

export default Quote;
