import React, {useState} from 'react';
import {useFormInputs} from "../../hooks/useFormInputs";
import BootstrapModal from "../helpers/BootstrapModal";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom";

const ContactForm = () => {
  const [formInputs, handleInputChange, handleInputsReset] = useFormInputs({
    message: '',
    name: '',
    email: '',
    subject: '',
  });

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleCloseModal = () => setShow(false);
  const handleRedirectModal = () => {
    setShow(false)
    navigate('/categories')
  }
  const handleShowModal = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInputs);
    handleInputsReset();
    handleShowModal();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-12">
          <Form.Group controlId="formMessage" className="form-group">
            <Form.Control as="textarea" cols="30" rows="9" name="message" placeholder="Enter message"
                          value={formInputs.message || ''} onChange={handleInputChange}/>
          </Form.Group>
        </div>
      </div>
      <div className="col-6">
        <Form.Group controlId="formName" className="form-group">
          <Form.Control type="text" name="name" placeholder="Enter your name" value={formInputs.name || ''}
                        onChange={handleInputChange}/>
        </Form.Group>
      </div>
      <div className="col-6">
        <Form.Group controlId="formEmail" className="form-group">
          <Form.Control type="email" name="email" placeholder="Enter email address" value={formInputs.email || ''}
                        onChange={handleInputChange}/>
        </Form.Group>
      </div>
      <div className="col-12">
        <Form.Group controlId="formSubject" className="form-group">
          <Form.Control type="text" name="subject" placeholder="Enter subject" value={formInputs.subject || ''}
                        onChange={handleInputChange}/>
        </Form.Group>
      </div>
      <Button type="submit" onClick={handleShowModal}>Submit form</Button>
      <BootstrapModal
        title='Thank you!'
        message='Your message successfully sent'
        show={show}
        handleClose={handleCloseModal}
        handleRedirect={handleRedirectModal}
      />
    </Form>
  )
};

export default ContactForm;
