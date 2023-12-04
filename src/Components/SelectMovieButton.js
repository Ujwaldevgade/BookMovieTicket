// SelectMovieButton.js

import React, { useState, useEffect } from 'react';
import "../styles/SelectMovieButton.css"; // Import the CSS file for styling

const SelectMovieButton = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const movies = [
    {
      title: 'Animal',
      description: 'Description for Animal movie.',
      image: '/Images/Animal.jpg',
    },
    {
      title: 'Bhool Bhulaiyya 2',
      description: 'Description for Bhool Bhulaiyya 2 movie.',
      image: '/Images/Bhool Bhulaiyya 2.jpg',
    },
    {
      title: 'Avengers - Secret Wars',
      description: 'Description for Avengers - Secret Wars movie.',
      image: '/Images/Avengers - Secret Wars.jpg',
    },
    {
      title: 'Iron Man',
      description: 'Description for Iron Man movie.',
      image: '/Images/Iron Man.jpg',
    },
  ];

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  const movie = movies[currentImageIndex];

  return (
    <div class="background-container">
    <div className="card-container">
      <button className="prev-arrow" onClick={handlePrevClick}>&#10094;</button>
      <div className="card">
        <img src={process.env.PUBLIC_URL + movie.image} className="card-img-top" alt="Card Image" />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.description}</p>
        </div>
      </div>
      <button className="next-arrow" onClick={handleNextClick}>&#10095;</button>
    </div>
    </div>
  );
};

export default SelectMovieButton;