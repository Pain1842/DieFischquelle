import React from 'react';
import { Card, Row, Col } from 'antd';
import { productsData } from '../data/productsData';
import './ProductsList.css';

const ProductsList: React.FC = () => {
  return (
    <div className="products-list-container">
      <h2>Unsere Produkte</h2>
      <Row gutter={[16, 16]} justify="center">
        {productsData.map((product, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Card
              hoverable
              cover={<img alt={product.name} src={product.image} className="product-image" />}
            >
              <Card.Meta title={product.name} description={product.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductsList;