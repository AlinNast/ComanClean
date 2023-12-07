import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel CSS
import './Homepage.css';
import FormModal from '../FormModal/FormModal'
import Before1 from './Images/Before1.jpg'
import After1 from './Images/After1.jpg'

// Coman facility services

const Homepage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        };

  return (
      <div>
          <section className="hero">
              <h1>Your Space, Sparkling Clean!</h1>
            
                <div>
                    
                    <button className="contact-form-button" onClick={toggleModal}>Make a Booking</button>
                    {isModalOpen && <FormModal toggleModal={setIsModalOpen} />}
                </div>
          </section>
          <section className="project-carousel">
            <h2>Our Projects</h2>
              <Carousel autoPlay interval={10000} infiniteLoop useKeyboardArrows>
                    <div className="carousel-item">
                        <img src={Before1} alt="Before Project 1" className="before"/>
                        <img src={After1} alt="After Project 1" className="after"/>
                    </div>
                    <div className="carousel-item">
                        <img src={Before1} alt="Before Project 1" className="before"/>
                        <img src={After1} alt="After Project 1" className="after"/>
                    </div>
                    <div className="carousel-item">
                        <img src={Before1} alt="Before Project 1" className="before"/>
                        <img src={After1} alt="After Project 1" className="after"/>
                    </div>
              </Carousel>
          </section>
      </div>
  );
};

export default Homepage;