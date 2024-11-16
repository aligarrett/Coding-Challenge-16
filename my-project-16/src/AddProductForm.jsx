// Task 6: Create the AddProductForm Component

import React, { useState } from 'react';

const AddProductForm = ({ addProduct }) => {
  // Use useState to manage form inputs
  const [name, setName] = useState('');  // State for the product name
  const [price, setPrice] = useState('');  // State for the product price
  const [description, setDescription] = useState('');  // State for the product description

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload on form submission

    // Validate inputs: Ensure all fields are filled
    if (!name || !price || !description) {
      alert("All fields are required!");  // Alert if any field is empty
      return;
    }

    // Create new product object with unique ID (timestamp) and form data
    const newProduct = {
      id: Date.now(),  // Use current timestamp as a unique ID
      name,
      price: parseFloat(price),  // Convert price to a float for proper number handling
      description,
    };

    // Add the new product by calling the addProduct function passed from App
    addProduct(newProduct);

    // Reset form fields after submission
    setName('');  // Clear the name field
    setPrice('');  // Clear the price field
    setDescription('');  // Clear the description field
  };

  return (
    <form onSubmit={handleSubmit}>  {/* Attach handleSubmit to form's submit event */}
      <h2>Add New Product</h2>  {/* Heading is now part of the form */}
      
      {/* Name input field */}
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}  // Bind the input value to the state
          onChange={(e) => setName(e.target.value)}  // Update state on input change
          placeholder="Enter product name"
        />
      </div>

      {/* Price input field */}
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price} 
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter product price"
        />
      </div>

      {/* Description textarea field */}
      <div>
        <label>Description:</label>
        <textarea
          value={description}  // Bind the textarea value to the state
          onChange={(e) => setDescription(e.target.value)}  // Update state on input change
          placeholder="Enter product description"
        />
      </div>

      {/* Submit button to add the product */}
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;