import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

import { useFormInputs } from '../../hooks/useFormInputs';
import BootstrapModal from '../helpers/BootstrapModal';

const ContactForm = () => {
  const [formInputs, handleInputChange, handleInputsReset] = useFormInputs({});

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInputsReset();
    setShowModal(true);
  };

  return (
    <Form onSubmit={handleSubmit} className={'feedback-form form'}>
      <Row>
        <Col>
          <Form.Group controlId="formMessage" className="form-group">
            <Form.Control
              as="textarea"
              cols="30"
              rows="9"
              name="message"
              placeholder="Enter message"
              value={formInputs.message || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Form.Group controlId="formName" className="form-group">
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formInputs.name || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group controlId="formEmail" className="form-group">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email address"
              value={formInputs.email || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Form.Group controlId="formSubject" className="form-group">
            <Form.Control
              type="text"
              name="subject"
              placeholder="Enter subject"
              value={formInputs.subject || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Button type="submit">Submit form</Button>
      {showModal && (
        <BootstrapModal
          title="Thank you!"
          show={showModal}
          setShow={setShowModal}
        >
          <p>Your message successfully sent</p>
        </BootstrapModal>
      )}
    </Form>
  );
};

export default ContactForm;
