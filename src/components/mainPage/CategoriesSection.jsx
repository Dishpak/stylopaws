import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Image, Row, Col } from 'react-bootstrap';

import { mainPageCategories } from '../helpers/renderDatas';

const CategoriesSection = () => {
  return (
    <section className="category-list">
      <Container>
        {mainPageCategories.map((category, index) => (
          <Row className="justify-content-between" key={index}>
            <Col>
              <Image src={category.image} />
            </Col>
            <Col>
              <div className="container">
                <h2>{category.title}</h2>
                <p>{category.description}</p>
                <Link to={category.link}>
                  <Button>Explore now</Button>
                </Link>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default CategoriesSection;
