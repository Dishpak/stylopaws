import React from 'react';
import {useSelector} from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart)

  return (
    <div className="container">
      <h1>Cart Component</h1>
      {cart.map((product) => {
        return <div className="row" key={product.id}>
          <div className="col">
            <img src={product.image} alt=""/>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        </div>
      })}
    </div>
  );
};

export default Cart;
