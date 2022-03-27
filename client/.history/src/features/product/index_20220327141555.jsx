import React from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';

const ProductFeature = () => {
   const location = useLocation();

   return <Outlet />;
};

export default ProductFeature;
