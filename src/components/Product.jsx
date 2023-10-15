import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {addToCart} from "../redux/cartSlice";

const Product = () => {
  const productId = useLocation().state;
  const [product, setProduct] = useState([]);
  const cartValue = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('http://localhost:3001/products/')
        if (!response.ok) {
          throw new Error(`HTTP Error! Status ${response.status}`)
        }
        const data = await response.json();
        setProduct([...data.filter(product => product.id === productId)]);
      } catch (error) {
        console.error('Error', error)
      }
    }
    loadData();
  }, [productId]);

  console.log(product);

  const addToCartHandler = () => {
    dispatch(addToCart)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={product[0]?.image} alt=""/>
        </div>
        <div className="col"><h1>{product[0]?.title}</h1>
          <p>{product[0]?.description}</p>
          <p><span>{product[0]?.price}</span></p>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(
              addToCart({
                id: product[0]?.id,
                title: product[0]?.title
              }))}>
            Add to cart
          </button>
          <p>{cartValue[0]}</p>
        </div>
      </div>

    </div>
  );
};

export default Product;
