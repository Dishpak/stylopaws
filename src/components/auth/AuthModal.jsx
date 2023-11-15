import React, { useState } from 'react';
import { Button, Collapse, Modal } from 'react-bootstrap';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthModal = ({ show, setShow }, props) => {
  const handleClose = () => setShow(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const changeForms = () => {
    setShowLoginForm(!showLoginForm);
    setShowRegisterForm(!showRegisterForm);
  };

  return (
    <>
      <Modal {...props} show={show} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Collapse in={showLoginForm}>
            <div>
              <LoginForm closeModal={handleClose} />
            </div>
          </Collapse>
          <Collapse in={showRegisterForm}>
            <div>
              <RegisterForm closeModal={handleClose} />
            </div>
          </Collapse>
          <p>Not a member?</p>
          <Button onClick={changeForms}>
            {showLoginForm ? 'Sign up!' : 'Log in'}
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AuthModal;
