// RandomQuote.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomQuote = () => {
  const [quoteData, setQuoteData] = useState({});

  useEffect(() => {
    fetchQuote();
  }, []); // Fetch quote when component mounts

  const fetchQuote = () => {
    axios.get('https://api.quotable.io/random')
      .then(response => {
        setQuoteData(response.data);
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
      });
  };

  const handleNextClick = () => {
    fetchQuote(); // Fetch a new quote
  };

  return (
    <div className="quote-container">
      <blockquote className="quote">
        <p className="quote-text">{quoteData.content}</p>
        <footer className="quote-author">— {quoteData.author}</footer>
      </blockquote>
      <button className="next-button" onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default RandomQuote;
