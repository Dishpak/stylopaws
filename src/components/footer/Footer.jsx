import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer mt-auto shadow-lg py-4">
      <Container>
        <Row className="w-50 mx-auto justify-content-center">
          <Col className="social-icons col-1">
            <a
              href="https://www.linkedin.com/in/dishpak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </Col>
          <Col className="social-icons col-1">
            <a
              href="https://github.com/dishpak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </Col>
          <Col className="social-icons col-1">
            <a
              href="https://www.instagram.com/dj_dishpak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </Col>
          <Col className="social-icons col-1">
            <a href="mailto: dishpak.dev@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
