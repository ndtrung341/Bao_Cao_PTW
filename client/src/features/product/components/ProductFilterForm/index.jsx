import React from 'react';
import FilterByBrand from './FilterByBrand';
import FilterByCategory from './FilterByCategory';
import FilterByPrice from './FilterByPrice';

const ProductFilterForm = ({ onFiltersChange }) => {
   return (
      <>
         <FilterByCategory onFiltersChange={onFiltersChange} />
         <FilterByBrand onFiltersChange={onFiltersChange} />
         <FilterByPrice onFiltersChange={onFiltersChange} />
      </>
   );
};

export default ProductFilterForm;
