import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';

const CartFeature = () => {
   return (
      <Routes>
         <Route path='' element={<CartPage />} />
         <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
   );
};

export default CartFeature;
