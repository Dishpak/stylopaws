import React, { useState } from 'react';
import { addToCart } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import AuthModal from '../auth/AuthModal';
import { apiUrl } from './globalVariables';
import BootstrapModal from './BootstrapModal';

const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userId = useSelector((state) => state.user.user?.id);
  const [showModal, setShowModal] = useState({
    registryModal: false,
    inCartModal: false,
  });

  const showRegisterDuties = () => {
    alert('You have to log in to make purchases!');
    setShowModal({
      ...showModal,
      registryModal: true,
    });
  };

  const addProductToCart = () => {
    if (userId) {
      if (cart.cart.find((item) => item.id === product.id)) {
        setShowModal({
          ...showModal,
          inCartModal: true,
        });
      } else {
        dispatch(addToCart({ product }));
        fetch(`${apiUrl}/users/${userId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify({
            cart: [...cart.cart, { ...product }],
            cartAmount: cart.amount + 1,
          }),
        });
      }
    } else {
      showRegisterDuties();
    }
  };

  return (
    <>
      <button className="btn btn-primary" onClick={addProductToCart}>
        Add to cart
      </button>
      <BootstrapModal
        title="Product already in cart"
        show={showModal.inCartModal}
        setShow={setShowModal}
      >
        <p>You can change amount of items in cart</p>
      </BootstrapModal>
      <AuthModal show={showModal.registryModal} setShow={setShowModal} />
    </>
  );
};

export default AddToCartButton;
