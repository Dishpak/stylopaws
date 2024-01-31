import React from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';

import ContactForm from './ContactForm';
import ContactInfo from './ContantInfo';

const Contacts = () => {
  return (
    <Container className={'contacts'}>
      <h1>Contacts Component</h1>
      <Row>
        <Col className="contacts-map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A2727de85fd5b1fec77f9f4bf714df6dca1a01a0b900180afe92b6caf24c880fc&amp;source=constructor"
            width="100%"
            height="400"
            frameBorder="0"
          ></iframe>
        </Col>
      </Row>
      <Row>
        <h2>Get in Touch!</h2>
        <Col>
          <ContactForm />
        </Col>
        <address className="col-4">
          <ContactInfo />
        </address>
      </Row>
    </Container>
  );
};

export default Contacts;
