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
  const inCart = cart.cart.find((item) => item.id === product.id);

  const showRegisterDuties = () => {
    alert('You have to log in to make purchases!');
    setShowModal({
      ...showModal,
      registryModal: true,
    });
  };

  const addProductToCart = () => {
    if (userId) {
      if (inCart) {
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
      <button
        className={`btn btn-primary ${inCart ? 'disabled' : ''}`}
        onClick={addProductToCart}
      >
        {inCart ? 'Already in cart' : 'Add to cart'}
      </button>
      <AuthModal show={showModal.registryModal} setShow={setShowModal} />
    </>
  );
};

export default AddToCartButton;
