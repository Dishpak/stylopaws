import React from 'react';
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SubscribeSection = () => {
  return (
    <section className="subscribe">
      <Container className="py-5 w-50">
        <h2>Stay in fashion loop!</h2>
        <p>Sign up for our newsletter to receive exclusive promotions, style updates, and early access to new arrivals.
          Join now and stay ahead in the world of fashion!</p>
        <InputGroup className="w-50 mx-auto">
          <Form.Control placeholder="enter your email"/>
          <Button variant="danger">subscribe</Button>
        </InputGroup>
      </Container>
    </section>);
};

export default SubscribeSection;
