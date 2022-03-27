import React from 'react';
import { useMatch } from 'react-router-dom';

const ProductFeature = () => {
   const match = useMatch();
   console.log(match);
   return 123;
};

export default ProductFeature;
