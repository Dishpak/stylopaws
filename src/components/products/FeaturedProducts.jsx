import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

const FeaturedProducts = () => {
  const products = useSelector((state) => state.user.user.featured);
  return (
    <Container className={'featured'}>
      <h1>featured products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} className={'col-3'}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedProducts;
