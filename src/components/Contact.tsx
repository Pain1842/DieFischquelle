import React from 'react';
import './Contact.css';
import { FaInstagram } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <div className="contact-section">
            <div className="contact-container">
                <h2>Kontakt</h2>
                <p>Wir freuen uns, von Ihnen zu hören! Kontaktieren Sie uns über die unten stehenden Informationen.</p>
                <div className="contact-info">
                    <div className="contact-item">
                        <h4>Email</h4>
                        <a href="mailto:fischquelle@live.de">fischquelle@live.de</a>
                    </div>
                    <div className="contact-item">
                        <h4>Telefon</h4>
                        <a href="tel:+4915208781467">+49 1520 8781467</a>
                    </div>
                    <div className="contact-item">
                        <h4>Adresse</h4>
                        <p>Rheinstr. 60, 56346 St. Goarshausen</p>
                    </div>
                </div>
                <div className="section-divider"></div>
                <div className="social-media">
                    <h4>Folge uns auf Social Media</h4>
                    <a href="https://www.instagram.com/fischquelle" target="_blank" rel="noopener noreferrer">
                        <button className="social-icon-button">
                            <FaInstagram />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
