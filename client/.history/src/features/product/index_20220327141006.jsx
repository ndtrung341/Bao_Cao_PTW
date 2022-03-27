import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductFeature = () => {
   const location = useLocation();
   console.log(location);
   return 123;
};

export default ProductFeature;
