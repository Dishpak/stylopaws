import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {loadProduct} from "../store/productsSlice";
import AddToCartButton from "./helpers/AddToCartButton";

const Product = () => {
  const productId = useLocation().state;
  const product = useSelector(state => state.product.product)
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('http://localhost:3001/products/')
        if (!response.ok) {
          throw new Error(`HTTP Error! Status ${response.status}`)
        }
        const data = await response.json();
        const product = data.filter(product => product.id === productId);
        dispatch(loadProduct(...product))

      } catch (error) {
        console.error('Error', error)
      }
    }
    loadData();
  }, [productId]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={product?.image} alt=""/>
        </div>
        <div className="col">
          <h1>{product?.title}</h1>
          <p>{product?.description}</p>
          <p><span>{product?.price}</span></p>
          <AddToCartButton product={product}/>
        </div>
      </div>
    </div>
  );
};

export default Product;
