import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Navbar from './Navbar/Navbar';

const PrivacyPolicy = () => <div><h1>Privacy Policy</h1></div>;
const AboutUs = () => <div><h1>About Us</h1></div>;
const ContactUs = () => <div><h1>Contact Us</h1></div>;


const Footer = () => <footer><p>Copyright 2023</p></footer>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;