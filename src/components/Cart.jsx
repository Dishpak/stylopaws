import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart)
  const cartTotal = cart.map(product => product.price).reduce((prev, next) => prev + next);
  const [productOverallPrice, setProductOverallPrice] = useState({});
  const [cartSummary, setCartSummary] = useState(cartTotal);

  useEffect(() => {
    const updateTotal = Object.values(productOverallPrice).reduce((total, productData) => total + productData?.productSum, cartTotal);
    setCartSummary(Math.round(updateTotal, -1));
  }, [productOverallPrice, cart]);

  const handlePriceCalculation = (productId, productQuantity, productPrice) => {
    const productSum = productPrice * productQuantity;

    setProductOverallPrice((prev) => ({
      ...prev, [productId]: {
        productPrice,
        productQuantity,
        productSum,
      },
    }))
  }

  return (<div className="container">
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
        return (<tr key={product.id}>
          <td><img src={product.image} alt="" className="w-25"/></td>
          <td>{product.title}</td>
          <td>{product.description}</td>
          <td>{product.price}</td>
          <td>
            <input
              type="number"
              className="form-control"
              name="productQuantity"
              value={productOverallPrice[product.id]?.productQuantity || 1}
              onChange={(e) => handlePriceCalculation(product.id, Number(e.target.value), product.price)}
              autoComplete="off"
              min="1"
            />
          </td>
          <td>
            {productOverallPrice[product.id]?.productSum ? productOverallPrice[product.id]?.productSum : product.price}
          </td>
        </tr>)
      })}
      </tbody>
      <tfoot>
      <tr>
        <td style={{textAlign: "right"}} colSpan="5">
          Summary: {cartSummary}
        </td>
        <td></td>
      </tr>
      </tfoot>
    </table>
  </div>);
};

export default Cart;
