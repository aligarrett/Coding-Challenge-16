// Task 6: Create the AddProductForm Component

import React, { useState } from 'react';

const AddProductForm = ({ addProduct }) => {
  // Use useState to manage form inputs
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload on form submission

    // Validate inputs
    if (!name || !price || !description) {
      alert("All fields are required!");
      return;
    }

    // Create new product object
    const newProduct = {
      id: Date.now(),  // Use current timestamp as a unique ID
      name,
      price: parseFloat(price),
      description,
    };

    // Add the new product by calling the addProduct function passed from App
    addProduct(newProduct);

    // Reset form fields
    setName('');
    setPrice('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter product price"
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter product description"
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;