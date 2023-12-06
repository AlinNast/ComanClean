import React from 'react';
import './ServicePage.css';

const ServicePage = () => {
    return (
        <div className="service-page">
            <h1>Our Services</h1>
            <div className="services-list">
                {/* Here you can map through an array of services, or add them manually */}
                <div className="service">
                    <h2>Service Title 1</h2>
                    <p>Description for service 1...</p>
                </div>
                <div className="service">
                    <h2>Service Title 2</h2>
                    <p>Description for service 2...</p>
                </div>
                {/* Add more services as needed */}
            </div>
        </div>
    );
}

export default ServicePage;
