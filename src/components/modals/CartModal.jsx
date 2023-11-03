import React from 'react';
import {Modal} from "react-bootstrap";

const CartModal = ({show, setShow}, props) => {
  const handleClose = () => setShow(false);
  return (
    <Modal {...props} show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <p>Product is already in cart</p>
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;
