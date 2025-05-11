// components/ProductList.js
'use client';

const ProductList = ({ products, onDelete }) => {
  if (products.length === 0) {
    return <p>No Product Found</p>;
  }

  return (
    <ul className="list-group">
      {products.map((product, index) => (
        <li key={index} className="list-group-item">
          <div className="row align-items-center">
            <div className="col text-start">
              <strong>{product.name}</strong>
            </div>
            <div className="col text-center">
              ${product.price.toFixed(2)}
            </div>
            <div className="col text-end">
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => onDelete(index)}
              >
                X
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
