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

  const handleTwitterShare = () => {
    // Implement Twitter sharing functionality here
    // For example, open a new window to share the quote on Twitter
    const url = `https://twitter.com/intent/tweet?text="${quoteData.content}" - ${quoteData.author}`;
    window.open(url, '_blank');
  };

  return (
    <div className="quote-container">
      <blockquote className="quote">
        <p className="quote-text">{quoteData.content}</p>
        <footer className="quote-author">— {quoteData.author}</footer>
      </blockquote>
      <button className="next-button" onClick={handleNextClick} title="Next Quote">Next</button>
      <button className="twitter-button" onClick={handleTwitterShare} title="Share on Twitter"></button>
    </div>
  );
};

export default RandomQuote;
