import React from 'react';
import { Layout } from 'antd';
import './About.css';

const { Content } = Layout;

const About: React.FC = () => {
    return (
        <Content className="about-section">
            <div className="about-container">
                <h2 className="about-title">
                    Über Uns
                </h2>
                <p className="about-text">
                    Wir sind ein traditionelles Familienunternehmen, spezialisiert auf feinsten Räucherfisch. Seit Jahren arbeiten wir daran,
                    unseren Kunden das beste Geschmackserlebnis zu bieten. Mit Liebe zum Detail und Respekt für die Tradition veredeln wir
                    frischen Fisch zu köstlichen Delikatessen. Qualität und Handwerk stehen bei uns an erster Stelle.
                </p>
            </div>
        </Content>
    );
};

export default About;
