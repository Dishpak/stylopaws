import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { loadProduct } from '../../store/productsSlice';
import AddToCartButton from '../helpers/AddToCartButton';
import ImageModal from '../modals/ImageModal';

const Product = () => {
  const productId = useLocation().state;
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const [showModalImage, setShowModalImage] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/products/${productId}`,
        );
        if (!response.ok) {
          throw new Error(`HTTP Error! Status ${response.status}`);
        }
        const data = await response.json();
        dispatch(loadProduct({ ...data }));
      } catch (error) {
        console.error('Error', error);
      }
    };
    void loadData();
  }, [productId]);

  return (
    <div className="container product-page">
      <div className="row">
        <div className="col">
          <img
            src={product?.image}
            onClick={() => setShowModalImage(true)}
            alt={product.title}
          />
        </div>
        <div className="col">
          <h1>{product?.title}</h1>
          <p>{product?.description}</p>
          <p>
            <span>{product?.price}$</span>
          </p>
          {product.features.length ? (
            <div>
              <h4>Features:</h4>
              <ul>
                {product?.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {product.care.length ? (
            <div>
              <h4>Content + Care:</h4>
              <ul>
                {product?.care?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
          <AddToCartButton product={product} />
        </div>
      </div>
      <ImageModal show={showModalImage} setShow={setShowModalImage}>
        <img src={product.image} alt={product.title} />
      </ImageModal>
    </div>
  );
};

export default Product;
