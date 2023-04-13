import React from 'react';

const ItemLoading = ({ text }) => (
  <div className="d-flex flex-column align-items-center justify-content-center">
    <div className="spinner-border text-warning pt-2" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="pt-1 text-warning">
      <h5>{text}</h5>
    </div>
  </div>
);

export default ItemLoading;
