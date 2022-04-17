import React from 'react';
import FilterByCategory from './FilterByCategory';
import FilterByPrice from './FilterByPrice';

const ProductFilterForm = ({ onFiltersChange }) => {
   return (
      <>
         <FilterByCategory onFiltersChange={onFiltersChange} />
         <FilterByPrice onFiltersChange={onFiltersChange} />
      </>
   );
};

export default ProductFilterForm;
