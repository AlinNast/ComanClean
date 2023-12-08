import React, { useState } from 'react';
import './FormModal.css';

const FormModal = ( {toggleModal} ) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        telephone: '',
        address: '',
        postcode:'',
        dateToClean:''

    });

    const handleToggle = () => {
        
        toggleModal(false);
    };

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

        <div className="modal-overlay" onClick={handleToggle}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
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

                        <div className="checkbox-group">
                            <div>
                                <input type="checkbox" id="cleaning" name="serviceType" value="Cleaning" onChange={handleChange} />
                                <label htmlFor="cleaning">Cleaning</label>
                            </div>
                            <div>
                                <input type="checkbox" id="renovation" name="serviceType" value="Renovation" onChange={handleChange} />
                                <label htmlFor="renovation">Renovation</label>
                            </div>
                            <div>
                                <input type="checkbox" id="other" name="serviceType" value="Other" onChange={handleChange} />
                                <label htmlFor="other">Other</label>
                            </div>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
                {/* Close Button */}
                <button className="close-button" onClick={handleToggle}>Close</button>
            
            </div>
        </div>

    );
};

export default FormModal;
