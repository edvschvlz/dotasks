import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ChangePassword1 from '../Pages/ChangePassword1';
import ChangePassword2 from '../Pages/ChangePassword2';

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/change-password-1" element={<ChangePassword1 />} />
        <Route path="/change-password-2" element={<ChangePassword2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRoutes;
