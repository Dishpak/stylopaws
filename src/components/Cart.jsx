import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {addToCart} from "../redux/addToCartSlice";

const Cart = () => {
  const cartValue = useSelector((state) => state.addToCart.value)

  return (
    <div>

    </div>
  );
};

export default Cart;
