import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';

const ProductFeature = () => {
   const location = useLocation();

   return <Outlet />;
};

export default ProductFeature;
