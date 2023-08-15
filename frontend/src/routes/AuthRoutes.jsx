import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ChangePassword from '../Pages/ChangePassword';

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/changepassword" element={<ChangePassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRoutes;
