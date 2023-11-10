import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-image">
      </div>
      <div className="contact-details">
        <h2>Contact Information</h2>
        <p><strong>Company Name:</strong> Your Company Name</p>
        <p><strong>Address:</strong> Your Company Address</p>
        <p><strong>Email:</strong> contact@example.com</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default ContactUs;