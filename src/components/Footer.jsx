import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer mt-auto shadow-lg py-4">
      <Container>
        <Row className="w-50 mx-auto justify-content-center">
          <Col className="social-icons col-1">
            <i className="fa-brands fa-linkedin"></i>
          </Col>
          <Col className="social-icons col-1">
            <i className="fa-brands fa-github"></i>
          </Col>
          <Col className="social-icons col-1">
            <i className="fa-brands fa-instagram"></i>
          </Col>
          <Col className="social-icons col-1">
            <i className="fa-brands fa-telegram"></i>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
