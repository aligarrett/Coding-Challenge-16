// Task 4: Create the ProductItem Component

import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>  {/* Display the product name */}
      <p><strong>Price: </strong>${product.price.toFixed(2)}</p>  {/* Display price with two decimal places */}
      <p><strong>Description: </strong>{product.description}</p>  {/* Display product description */}
    </div>
  );
};

export default ProductItem;