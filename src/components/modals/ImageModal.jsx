import React from 'react';

const ImageModal = ({ show, setShow, children }) => {
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
      </div>
    </div>
  );
};

export default ImageModal;
