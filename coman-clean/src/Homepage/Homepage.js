import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel CSS
import './Homepage.css';
import FormModal from '../FormModal/FormModal'

// Coman facility services

const Homepage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        console.log("im here");
        setIsModalOpen(!isModalOpen);
        };

  return (
      <div>
          <section className="hero">
              <h1>Your Space, Sparkling Clean!</h1>
            <h2>
                <div>
                    <br/>
                    <button onClick={toggleModal}>butonul</button>
            {isModalOpen && <FormModal toggleModal={setIsModalOpen} />}
                </div>
            </h2>
          </section>
          <section className="project-carousel">
              <Carousel autoPlay interval={3000} infiniteLoop useKeyboardArrows>
                  {/* Add your project images here */}
                  <div>
                      <img src="/path-to-your-image1.jpg" alt="Project 1" />
                  </div>
                  <div>
                      <img src="/path-to-your-image2.jpg" alt="Project 2" />
                  </div>
                  {/* Add as many as you like */}
              </Carousel>
          </section>
      </div>
  );
};

export default Homepage;