import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import ContactUs from './ContactUs/ContactUs';
import ServicePage from './ServicePage/ServicePage';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './TermsOfService/TermsAndConditions';

const AboutUs = () => <div><h1>About Us</h1></div>;




function App() {
  return (
    <Router>
      <Navbar />
      <Routes className='main-content'>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path="/services" element={<ServicePage/> } />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/terms-of-service" element={<TermsAndConditions/>} />
          
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;