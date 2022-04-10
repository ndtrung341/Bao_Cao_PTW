import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CheckoutPage from './pages/CheckoutPage';

const CheckoutFeature = () => {
   return (
      <Routes>
         <Route path='' element={<CheckoutPage />} />
         <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
   );
};

export default CheckoutFeature;
