import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; 2024 Die Fischquelle. Alle Rechte vorbehalten.</p>
                <a href="/impressum" className="footer-link">Impressum</a>
            </div>
        </footer>
    );
};

export default Footer;
