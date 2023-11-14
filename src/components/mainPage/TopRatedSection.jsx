import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { apiUrl } from '../helpers/globalVariables';
import { Link } from 'react-router-dom';

const TopRatedSection = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/products?_sort=rating.rate&_order=desc&_limit=6`,
        );
        if (!response.ok) {
          throw new Error('Unable to load data');
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Unable to load data');
      }
    };
    void loadProducts();
  }, []);

  return (
    <section className="top-products">
      <Container>
        <h2 className="mb-3">Top Rated Products</h2>
        <Row className="g-3">
          {products?.map((product) => (
            <Col
              lg={4}
              className="card-container"
              as={Link}
              to={`/product/${product.id}`}
              state={product.id}
              key={product.id}
            >
              <Card key={product.id} className="product-card p-5">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>
                    <h3>{product.title}</h3>
                  </Card.Title>
                  <Card.Text>
                    <span className="rating">{product.rating.rate}</span>
                    <br />
                    {product.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>{product.price}$</Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TopRatedSection;
