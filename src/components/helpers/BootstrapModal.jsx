import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {useNavigate} from 'react-router-dom';

const BootstrapModal = ({title, message, handleClose, show, handleRedirect}) => {


  return (
    <>
      {/*<Button variant="primary" onClick={handleShow}>*/}
      {/*</Button>*/}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRedirect}>
            Back to Shopping
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BootstrapModal;
