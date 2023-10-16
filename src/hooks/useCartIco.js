import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";

const useCartIco = () => {
  const cart = useSelector(state => state.cart)
  const [cartCounter, setCartCounter] = useState(cart.amount);

  const fullCartIco = () => {
    if(cartCounter >= 10) {
      setCartCounter('...')
    } else {
      setCartCounter(cart.amount);
    }
  }

  useEffect(() => {
    fullCartIco();
  }, [cart]);


  return [cartCounter]
};

export default useCartIco;
