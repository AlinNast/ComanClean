import React, { useState } from 'react';
import './FormModal.css';

const FormModal = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        telephone: '',
        address: '',
        postcode:'',
        dateToClean:''

    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Reset form after submission
        setFormData({ name: '', email: '', message: '', telephone: '', address: '', postcode: '', dateToClean: '' });
    };

    return (
        <div className="contact-form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                <label htmlFor="telephone">Telephone:</label>
                <input type="text" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} />

                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />

                <label htmlFor="postcode">Postcode:</label>
                <input type="text" id="postcode" name="postcode" value={formData.postcode} onChange={handleChange} />

                <label htmlFor="dateToClean">Date to Clean:</label>
                <input type="date" id="dateToClean" name="dateToClean" value={formData.dateToClean} onChange={handleChange} />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default FormModal;
