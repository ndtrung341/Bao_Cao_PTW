import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const AuthFeature = () => {
   return (
      <Routes>
         <Route path='login' element={<LoginPage />} />
         <Route path='register' element={<RegisterPage />} />
         <Route path='*' element={<Navigate to='404' />} />
      </Routes>
   );
};

export default AuthFeature;
