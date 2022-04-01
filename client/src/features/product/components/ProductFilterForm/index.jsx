import React from 'react';
import FilterByBrand from './FilterByBrand';
import FilterByCategory from './FilterByCategory';
import FilterByPrice from './FilterByPrice';

const ProductFilterForm = () => {
   return (
      <>
         <FilterByCategory />
         <FilterByBrand />
         <FilterByPrice />
      </>
   );
};

export default ProductFilterForm;
