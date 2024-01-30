import React, { useState } from 'react';
import ImageModal from '../modals/ImageModal';
import { Button } from 'react-bootstrap';

const Slider = ({ product }) => {
  const [showModalImage, setShowModalImage] = useState(false);
  const [imageCounter, setImageCounter] = useState(0);
  const slideForward = () => {
    setImageCounter(
      imageCounter === product.image.length - 1 ? 0 : imageCounter + 1,
    );
  };

  const slideBackward = () => {
    setImageCounter(
      imageCounter === 0 ? product.image.length - 1 : imageCounter - 1,
    );
  };

  const moveToSlide = (index) => {
    setImageCounter(index);
  };

  console.log(imageCounter);

  return (
    <>
      <div className="slider-container">
        {product.image.length > 1 && (
          <>
            <Button onClick={slideBackward} className={'btn-backward'}>
              <i className="fa-solid fa-chevron-left"></i>
            </Button>
            <Button onClick={slideForward} className={'btn-forward'}>
              <i className="fa-solid fa-chevron-right"></i>
            </Button>
          </>
        )}
        <img
          className={'slider-image'}
          src={product.image[imageCounter]}
          onClick={() => setShowModalImage(true)}
          alt={product.title}
        />

        <div className="preview-container">
          {product.image.map((image, index) => (
            <img
              src={image}
              alt=""
              key={index}
              className={'slider-preview-image'}
              onClick={() => moveToSlide(index)}
            />
          ))}
        </div>
      </div>
      <ImageModal show={showModalImage} setShow={setShowModalImage}>
        <img src={product.image[imageCounter]} alt={product.title} />
      </ImageModal>
    </>
  );
};

export default Slider;
