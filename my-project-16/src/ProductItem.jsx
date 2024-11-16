// Task 4: Create the ProductItem Component

import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p><strong>Price: </strong>${product.price.toFixed(2)}</p>
      <p><strong>Description: </strong>{product.description}</p>
    </div>
  );
};

export default ProductItem;