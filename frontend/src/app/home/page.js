// app/home/page.js
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '../../components/ProtectedRoute';
import AddProductForm from '../../components/AddProductForm';
import SearchBar from '../../components/SearchBar';
import ProductList from '../../components/ProductList';

const HomePage = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const handleAddProduct = (newProduct) => {
    const isDuplicate = products.some(
      (product) => product.name.toLowerCase() === newProduct.name.toLowerCase()
    );
    if (isDuplicate) {
      alert('Product already exists!');
      return;
    }
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ProtectedRoute>
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Product Management</h2>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <AddProductForm onAdd={handleAddProduct} />
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
        <ProductList products={filteredProducts} onDelete={handleDeleteProduct} />
      </div>
    </ProtectedRoute>
  );
};

export default HomePage;
