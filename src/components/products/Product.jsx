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
        const response = await fetch('http://localhost:3001/products/');
        if (!response.ok) {
          throw new Error(`HTTP Error! Status ${response.status}`);
        }
        const data = await response.json();
        const product = data.filter((product) => product.id === productId);
        dispatch(loadProduct(...product));
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
