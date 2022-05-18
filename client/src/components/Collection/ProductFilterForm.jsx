import React from 'react';
import FilterByBrand from './FilterByBrand';
import FilterByCategory from './FilterByCategory';
import FilterByPrice from './FilterByPrice';

const ProductFilterForm = ({ onFiltersChange, filterOptions, filters }) => {
   const handleCategoryChange = (categories) => {
      const newFilters = {
         ...filters,
         page: 1,
         categories: categories.length ? categories.join(',') : undefined,
      };
      onFiltersChange(newFilters);
   };

   const handleBrandChange = (brands) => {
      const newFilters = {
         ...filters,
         page: 1,
         brands: brands.length ? brands.join(',') : undefined,
      };
      onFiltersChange(newFilters);
   };

   const handlePriceChange = (minPrice, maxPrice) => {
      const newFilters = {
         ...filters,
         minPrice,
         maxPrice,
      };
      onFiltersChange(newFilters);
   };

   return (
      <>
         <FilterByCategory
            onCategoryChange={handleCategoryChange}
            categoryList={filterOptions.categories}
            values={filters.categories?.split(',')}
         />
         <FilterByBrand
            onBrandChange={handleBrandChange}
            brandList={filterOptions.brands}
            values={filters.brands?.split(',')}
         />
         <FilterByPrice
            onPriceChange={handlePriceChange}
            minPrice={filters.minPrice}
            maxPrice={filters.maxPrice}
         />
      </>
   );
};

export default ProductFilterForm;
