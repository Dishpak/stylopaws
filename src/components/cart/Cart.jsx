import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeFromCart } from '../../store/cartSlice';
import { apiUrl } from '../helpers/globalVariables';

const Cart = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const cartAmount = useSelector((state) => state.cart.amount);
  const cartTotal = cart.reduce((total, product) => total + product.price, 0);
  const [productOverallPrice, setProductOverallPrice] = useState({});
  const [cartSummary, setCartSummary] = useState(cartTotal);

  useEffect(() => {
    const updateTotal = Object.values(productOverallPrice).reduce(
      (total, productData) => total + productData?.productSum,
      cartTotal,
    );
    setCartSummary(updateTotal.toFixed(2));
  }, [productOverallPrice, cart]);

  const handlePriceCalculation = (productId, productQuantity, productPrice) => {
    const productSum = productPrice * productQuantity;
    setProductOverallPrice((prev) => ({
      ...prev,
      [productId]: {
        productPrice,
        productQuantity,
        productSum,
      },
    }));
  };

  const handleDeleteProduct = async (productId) => {
    dispatch(removeFromCart(productId));
    try {
      await fetch(`${apiUrl}/users/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          cart: cart.filter((item) => item.id !== productId),
          cartAmount: cartAmount - 1,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Cart Component</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Product</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Overall</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => {
            return (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt="" className="w-25" />
                </td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="productQuantity"
                    value={
                      productOverallPrice[product.id]?.productQuantity || 1
                    }
                    onChange={(e) =>
                      handlePriceCalculation(
                        product.id,
                        Number(e.target.value),
                        product.price,
                      )
                    }
                    autoComplete="off"
                    min="1"
                  />
                </td>
                <td>
                  {productOverallPrice[product.id]?.productSum || product.price}
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td style={{ textAlign: 'right' }} colSpan="5">
              Summary:
            </td>
            <td>{cartSummary}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;
