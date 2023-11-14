import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useCartIco = () => {
  const cart = useSelector((state) => state.cart);
  const [cartCounter, setCartCounter] = useState('');

  const fullCartIco = () => {
    console.log(cart.amount);
    console.log(cartCounter);
    if (cart.amount >= 10) {
      setCartCounter('10+');
    } else {
      setCartCounter(cart.amount.toString());
    }
  };

  useEffect(() => {
    fullCartIco();
  }, [cart]);

  return [cartCounter];
};

export default useCartIco;
