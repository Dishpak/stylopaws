import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';

import { apiUrl } from '../helpers/globalVariables';
import ProductCard from './ProductCard';

const Category = () => {
  const categoryTitle = useParams().categoryTitle;
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    try {
      const response = await fetch(
        `${apiUrl}/products?category=${categoryTitle}`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status ${response.status}`);
      }
      const data = await response.json();
      setProducts(data.filter((product) => product.category === categoryTitle));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    void loadProducts();
  }, [categoryTitle]);

  return (
    <Container className={'category'}>
      <h1>{categoryTitle}</h1>
      <Row className={'g-3'}>
        {products.map((product) => (
          <Col key={product.id} className={'col-3'}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
