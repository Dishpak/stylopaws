import React, {useState} from 'react';
import {Container, InputGroup, Form, Button} from "react-bootstrap";
import {useFormInputs} from "../../hooks/useFormInputs";
import BootstrapModal from "../helpers/BootstrapModal";

const SubscribeSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [formInputs, handleInputChange, handleInputsReset] = useFormInputs({});

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInputsReset();
    setShowModal(true);
  }
  return (
    <section className="subscribe">
      <Container className="py-5 w-50">
        <h2>Stay in fashion loop!</h2>
        <p>Sign up for our newsletter to receive exclusive promotions, style updates, and early access to new arrivals.
          Join now and stay ahead in the world of fashion!</p>
        <Form onSubmit={handleSubmit}><InputGroup className="w-50 mx-auto">
          <Form.Control
            placeholder="enter your email"
            value={formInputs.email || ''}
            onChange={handleInputChange}
            name="email"
            onSubmit={handleSubmit}
          />
          <Button variant="danger" type="submit">subscribe</Button>
        </InputGroup></Form>
        <BootstrapModal show={showModal} setShow={setShowModal} title="Thank you!">
          <p>You've successfully subscribed!</p>
        </BootstrapModal>
      </Container>
    </section>);
};

export default SubscribeSection;
