import React from 'react';
import './style.css';

const Modal = ({ children, onClose }) => {
  return (
    <div className='Container' onClick={onClose}>
      <div className='Modal'>
        {children}
        This is the secret modal message!
        <hr />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
