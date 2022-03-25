import React from 'react';
import { Route, Routes } from 'react-router-dom';

const AuthFeature = () => {
   return (
      <Routes>
         <Route path='login' />
         <Route path='register' />
      </Routes>
   );
};

export default AuthFeature;
