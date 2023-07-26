import React, { useState } from 'react';
import { LoginStyles } from './Login.Styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [adminId, setAdminId] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3001/login`, { adminId, password })
      .then((response) => {
        if (response.data === 'Success') {
          console.log('logged in');
          navigate('/form');
        } else {
          setError(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        setError('An error occurred. Please try again later.');
      });
  };

  return (
    <LoginStyles>
      <h1>Log in</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className='inputContainer'>
          <label>Admin ID</label>
          <input type={'text'} onChange={(e) => setAdminId(e.target.value)} />
          <label>Password</label>
          <input
            type={'password'}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Log in</button>
      </form>
    </LoginStyles>
  );
}
