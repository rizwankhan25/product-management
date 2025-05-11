// components/AddProductForm.js
'use client';

import { useState } from 'react';

const AddProductForm = ({ onAdd }) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!productName || !price) return;

    onAdd({ name: productName.trim(), price: parseFloat(price) });
    setProductName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleAdd} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Product Name</label>
        <input
          type="text"
          className="form-control"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="number"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm; 
