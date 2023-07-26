import React, { useState } from 'react';
import { EditFormStyles } from './EditForm.Styles';
import axios from 'axios';

const EditForm = ({ customer, onClose, fetchData }) => {
  const [formData, setFormData] = useState({
    firstName: customer.firstName,
    lastName: customer.lastName,
    email: customer.email,
    age: customer.age,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/customers/${customer._id}`, formData)
      .then((response) => {
        console.log('Customer updated:', response.data);
        fetchData();
        onClose();
      })
      .catch((error) => {
        console.log('Error updating customer:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <EditFormStyles className='editForm'>
      <h1>Edit Customer Information</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type='text'
          name='firstName'
          value={formData.firstName}
          onChange={handleInputChange}
        />

        <label>Last Name:</label>
        <input
          type='text'
          name='lastName'
          value={formData.lastName}
          onChange={handleInputChange}
        />

        <label>Email:</label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
        />

        <label>Age:</label>
        <input
          type='date'
          name='age'
          value={formData.age}
          onChange={handleInputChange}
        />

        <button type='submit'>Save Changes</button>
        <button type='button' id='cancel' onClick={onClose}>
          Cancel
        </button>
      </form>
    </EditFormStyles>
  );
};

export default EditForm;
