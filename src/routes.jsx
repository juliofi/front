// src/routes.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './assets/pages/Login';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Você pode adicionar mais rotas aqui depois */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
