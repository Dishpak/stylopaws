import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { ROUTES } from '../helpers/globalVariables';

const HeroSection = () => {
  return (
    <section className="hero-banner">
      <Container>
        <Row>
          <Col>
            <Container className="justify-content-center align-items-start d-flex flex-column text-start h-100">
              <h1>Elevate Your Style</h1>
              <p>
                Discover Modern, Stylish Clothing for Every Occasion. Shop Now
                for the Latest Trends!
              </p>
              <Link to={ROUTES.CATEGORIES}>
                <Button variant="primary" className="px-4 py-3">
                  Shop now
                </Button>
              </Link>
            </Container>
          </Col>
          <Col>
            <Image
              src="/assets/hero_image.jpg"
              alt="hero banner image"
              className="w-100 h-auto"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
