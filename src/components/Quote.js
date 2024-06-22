import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuote } from "../slices/quoteSlice";

const Quote = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  let content;

  if (quote.status === "loading") {
    content = <p>Loading...</p>;
  } else if (quote.status === "succeeded") {
    content = (
      <>
        <p>"{quote.text}"</p>
        <p>- {quote.author}</p>
      </>
    );
  } else if (quote.status === "failed") {
    content = <p>{quote.error}</p>;
  }

  return (
    <div className="quote">
      <h2>Inspirational Quote</h2>
      {content}
    </div>
  );
};

export default Quote;
