import React from 'react';
import {addToCart} from "../store/cartSlice";
import {useDispatch} from "react-redux";

const AddToCartButton = (props) => {
  const dispatch = useDispatch();
  const addProductToCart = () => {
    dispatch(addToCart(props.product))
  }

  return (
    <button
      className="btn btn-primary"
      onClick={() => addProductToCart()}>
      Add to cart
    </button>
  );
};

export default AddToCartButton;
