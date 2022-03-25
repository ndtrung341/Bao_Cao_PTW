import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

const AuthFeature = () => {
   return (
      <Routes>
         <Route path='login' element={<LoginPage />} />
         <Route path='register' />
      </Routes>
   );
};

export default AuthFeature;
