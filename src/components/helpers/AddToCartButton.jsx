import React, {useState} from 'react';
import {addToCart, dropCart} from "../../store/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import AuthModal from "../auth/AuthModal";
import {apiUrl} from "../../globalVariables";

const AddToCartButton = ({product}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  const userId = useSelector(state => state.user.user?.id)
  const [showModal, setShowModal] = useState(false);

  const showRegisterDuties = () => {
    alert('You have to log in to make purchases!')
    setShowModal(true)
  }


  const addProductToCart = () => {
    if (userId) {
      if (cart.cart.find(item => item.id === product.id)) {
        return null;
      } else {
        dispatch(addToCart({product: product, userId: userId}))
        fetch(`${apiUrl}/users/${userId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
            cart: [...cart.cart,{...product}],
            cartAmount: cart.amount + 1,
          })
        })
      }
    } else {
      showRegisterDuties();
    }
  }

  return (
    <>
      <button
        className="btn btn-primary"
        // onClick={() => dispatch(dropCart())}
        onClick={addProductToCart}
      >
        Add to cart
      </button>
      <AuthModal show={showModal} setShow={setShowModal} />
    </>
  );
};

export default AddToCartButton;
