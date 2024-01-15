import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Row, Col, Container } from 'react-bootstrap';

import AddToCartButton from '../helpers/AddToCartButton';
import { apiUrl } from '../helpers/globalVariables';
import FeaturedIcon from '../helpers/FeaturedIcon';

const Category = () => {
  const categoryTitle = useParams().categoryTitle;
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    try {
      const response = await fetch(`${apiUrl}/products`);
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
            <Card>
              <Link to={`/product/${product.id}`} state={product.id}>
                <div className={'card-image'}>
                  <Card.Img variant="top" src={product.image} />
                </div>
              </Link>
              <Card.Body>
                <Card.Title
                  as={Link}
                  to={`/product/${product.id}`}
                  state={product.id}
                >
                  {product.title}
                </Card.Title>
                <Card.Text>{product.price}$</Card.Text>
              </Card.Body>
              <Card.Footer>
                <AddToCartButton product={product} />
                <FeaturedIcon id={product.id} />
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
