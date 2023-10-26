import React from 'react';
import {addToCart, dropCart} from "../../store/cartSlice";
import {useDispatch, useSelector} from "react-redux";

const AddToCartButton = ({product}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart)
  const userId = useSelector(state => state.user.user?.id)

  const addProductToCart = () => {
    if (cart.find(item => item.id === product.id)) {
      return null;
    } else {
      dispatch(addToCart({product: product, userId: userId}))
    }
  }

  return (<button
    className="btn btn-primary"
    // onClick={() => dispatch(dropCart())}
    onClick={addProductToCart}
  >
    Add to cart
  </button>);
};

export default AddToCartButton;
