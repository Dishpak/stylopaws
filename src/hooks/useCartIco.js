import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";

const useCartIco = () => {
  const cart = useSelector(state => state.cart)
  const isEmpty = cart.cart.length <=0;
  // const cartCounter = cart.amount;
  const [cartCounter, setCartCounter] = useState(cart.amount);
  const [cartIcoClass, setCartIcoClass] = useState('')

  const fullCartIco = () => {
    isEmpty ? setCartIcoClass('empty') : setCartIcoClass('full');

    if(cartCounter >= 10) {
      setCartCounter('...')
    } else {
      setCartCounter(cart.amount);
    }
  }

  useEffect(() => {
    fullCartIco();
  }, [cart]);


  return [cartIcoClass, cartCounter]
};

export default useCartIco;
