import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className='home-container'>
      <div className='big-text'>
        <h1>Big Centered Text</h1>
      </div>
      <div className='small-text'>
        <p>Smaller Text</p>
      </div>
      <div className='pictures'>
        <img src='image1.jpg' alt='Image 1' />
        <img src='image2.jpg' alt='Image 2' />
        <img src='image3.jpg' alt='Image 3' />
      </div>
    </div>
  );
};

export default Homepage;