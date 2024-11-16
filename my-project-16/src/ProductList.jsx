import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Available Products</h2>
      <ul>
       {/* Task 5: Use map to render a ProductItem for each product with a unique key */}
        {products.map((product) => (
          <ProductItem
            key={product.id}  // Use a unique key for each product
            product={product}  // Pass the product data to ProductItem
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;