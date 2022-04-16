import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

const ProductFeature = () => {
   return (
      <Routes>
         <Route path='list' element={<ListPage />} />
         <Route path=':slug' element={<DetailPage />} />
      </Routes>
   );
};

export default ProductFeature;
