import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const BootstrapModal = ({ title, children, show, setShow }) => {
  const handleCloseModal = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleCloseModal} centered className={'w-100'}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BootstrapModal;
