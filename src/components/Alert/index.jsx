import React from 'react';
import './style.css';

const Alert = ({ isOpen, message, onCancel, onConfirm }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='modal'>
      <div className='modal_content'>
        <p>{message}</p>
        <div className='modal_actions'>
          {' '}
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
