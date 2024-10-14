import React from 'react';
import { Carousel as AntdCarousel, Layout } from 'antd';
import { carouselImages } from '../data/carouselData';
import './Carousel.css';

const { Content } = Layout;

const items = carouselImages.map((image, index) => (
    <div key={index}>
        <img
            src={image}
            alt={`Anhänger ${index + 1}`}
            style={{ width: '100vw', maxHeight: '600px', objectFit: 'cover' }}
        />
    </div>
));

const Carousel: React.FC = () => {
    return (
        <Content style={{ padding: '0', marginTop: 62, position: 'relative', zIndex: 1 }}>
            <div
                className="carousel-overlay" /* Verlinken wir das CSS */
            >
                <p className="carousel-text">
                    Frisch. Traditionell. Einzigartig. <br />
                    Entdecke den besten Räucherfisch aus unserer Manufaktur. <br />
                    Die Fischquelle.
                </p>
            </div>

            <AntdCarousel autoplay>
                {items}
            </AntdCarousel>
        </Content>
    );
};

export default Carousel;
