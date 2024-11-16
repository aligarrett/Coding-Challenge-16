// Task 2: Create the App Component

import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

const App = () => {
  // Define the default list of products
  const [products, setProducts] = useState([
    { id: 1, name: 'T-shirt', price: 19.99, description: 'A comfortable cotton t-shirt available in various colors.' },
    { id: 2, name: 'Jeans', price: 49.99, description: 'Classic denim jeans with a modern fit.' },
    { id: 3, name: 'Sneakers', price: 79.99, description: 'Stylish sneakers perfect for casual wear.' },
    { id: 4, name: 'Jacket', price: 89.99, description: 'A warm jacket for colder weather.' },
    { id: 5, name: 'Dress', price: 59.99, description: 'A fashionable dress suitable for both casual and formal occasions.' },
  ]);

  // Function to handle adding a new product
  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <div>
      <h1>Clothing Store</h1>
      {/* Pass the list of products to ProductList and the addProduct function to AddProductForm */}
      <ProductList products={products} />
      <AddProductForm addProduct={addProduct} />
    </div>
  );
};

export default App;