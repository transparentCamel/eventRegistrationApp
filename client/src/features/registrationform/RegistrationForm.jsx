import React, { useState } from 'react';
import { RegistrationFormStyles } from './RegistrationForm.Styles';

import axios from 'axios';
import NavButton from '../../components/navButton/NavButton';

export default function RegistrationForm() {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    age: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (formData.firstName.trim() === '') {
      errors.firstName = 'First Name is required';
    }
    if (formData.lastName.trim() === '') {
      errors.lastName = 'Last Name is required';
    }
    if (formData.email.trim() === '') {
      errors.email = 'Email is required';
    }
    if (formData.age.trim() === '') {
      errors.age = 'Age is required';
    }

    if (Object.keys(errors).length === 0) {
      axios
        .post('http://localhost:3001/form', formData)
        .then(() => {
          alert('Form Submitted');

          setFormData(initialFormData);
          setFormErrors({});
        })
        .catch((err) => console.log(err));
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <RegistrationFormStyles>
      <NavButton text={'Log out'} link={'/login'} className={'logoutBtn'} />
      <NavButton
        text={'Go to table'}
        link={'/customers'}
        className={'goToTable'}
      />
      <h1>Create an event reservation</h1>
      {formErrors.firstName && <p>* {formErrors.firstName}</p>}
      <form onSubmit={handleSubmit}>
        <div className='inputContainer'>
          <label>First Name</label>
          <input
            type={'text'}
            name={'firstName'}
            id={'firstName'}
            value={formData.firstName}
            onChange={(e) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                firstName: e.target.value,
              }))
            }
          />

          {formErrors.lastName && <p>* {formErrors.lastName}</p>}
          <label>Last Name</label>
          <input
            type={'text'}
            name={'lastName'}
            id={'lastName'}
            value={formData.lastName}
            onChange={(e) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                lastName: e.target.value,
              }))
            }
          />

          {formErrors.email && <p>* {formErrors.email}</p>}
          <label>Email</label>
          <input
            type={'email'}
            name={'email'}
            id={'email'}
            value={formData.email}
            onChange={(e) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                email: e.target.value,
              }))
            }
          />

          {formErrors.age && <p>* {formErrors.age}</p>}
          <label>Date of birth</label>
          <input
            type={'date'}
            name={'birthday'}
            id={'birthday'}
            value={formData.age}
            onChange={(e) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                age: e.target.value,
              }))
            }
          />

          <input type={'submit'} name={'submit'} id={'submit'} />
        </div>
      </form>
    </RegistrationFormStyles>
  );
}
