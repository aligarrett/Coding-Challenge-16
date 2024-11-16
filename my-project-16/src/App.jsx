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
  return (
    <div>
      <h1>Product Management</h1>
      {/* Pass the products list as props to ProductList */}
      <ProductList products={products} />
      <AddProductForm />
    </div>
  );
};

export default App;
