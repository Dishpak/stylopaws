import React from 'react';
import {addToCart} from "../../store/cartSlice";
import {useDispatch, useSelector} from "react-redux";

const AddToCartButton = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart)
  const addProductToCart = () => {

    if(cart.find(item => item.id === props.product.id)) {
      return null;
    } else {
      dispatch(addToCart(props.product))
    }

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
