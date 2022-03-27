import React from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import ProductList from './pages/ProductList';

const ProductFeature = () => {
   const location = useLocation();

   return (
      <Routes>
         <Route path='collections' element={<ProductList />} />
         <Route path='product/:id' element={<ProductDetail />} />
      </Routes>
   );
};

export default ProductFeature;
