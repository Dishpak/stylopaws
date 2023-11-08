import React from 'react';
import {Modal, Button} from "react-bootstrap";

const BootstrapModal = ({title, message, handleClose, show, handleRedirect}) => {


  return (
    <>
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
