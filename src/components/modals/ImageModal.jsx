import React from 'react';
import { Button } from 'react-bootstrap';

const ImageModal = ({
  show,
  setShow,
  children,
  slideForward,
  slideBackward,
}) => {
  return (
    <div
      className={show ? 'image-modal show' : 'image-modal'}
      onClick={() => setShow(false)}
    >
      <div
        className={show ? 'image-modal-content show' : 'image-modal-content'}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <>
          <Button onClick={slideBackward} className={'btn-backward'}>
            <i className="fa-solid fa-chevron-left"></i>
          </Button>
          <Button onClick={slideForward} className={'btn-forward'}>
            <i className="fa-solid fa-chevron-right"></i>
          </Button>
        </>
      </div>
    </div>
  );
};

export default ImageModal;
