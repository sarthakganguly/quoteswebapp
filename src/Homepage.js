// Homepage.js

import React, { useState, useEffect } from 'react';
import RandomQuote from './RandomQuote';

const Homepage = () => {
  const [backgroundGradient, setBackgroundGradient] = useState('');

  useEffect(() => {
    updateBackgroundGradient(); // Call the function when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once, on component mount

  const updateBackgroundGradient = () => {
    // Generate a random dark color gradient
    const randomColor1 = getRandomDarkColor();
    const randomColor2 = getRandomDarkColor();
    setBackgroundGradient(`linear-gradient(to bottom, ${randomColor1}, ${randomColor2})`);
  };

  // Function to generate a random dark color
  const getRandomDarkColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="homepage-container" style={{ background: backgroundGradient, transition: 'background 0.5s' }}>
      <div className="quote-box">
        <RandomQuote />
      </div>
    </div>
  );
};

export default Homepage;
