import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './globalStyles/GlobalStyles';
import RegistrationForm from './features/registrationform/RegistrationForm';
import Table from './features/table/Table';
import Login from './features/login/Login';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/form' element={<RegistrationForm />} />
          <Route path='/customers' element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
