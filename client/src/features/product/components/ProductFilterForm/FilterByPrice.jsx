import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Button, TextField } from '@mui/material';
import FilterLabel from './FiterLabel';
import { useSelector } from 'react-redux';
import { selectFilters } from 'features/product/collectionSlice';

const FilterByPrice = ({ onFiltersChange }) => {
   const filters = useSelector(selectFilters);
   const [values, setValues] = useState({ minPrice: 0, maxPrice: 0 });

   const handleSubmit = () => {
      if (!onFiltersChange) return;
      const newFilters = {
         ...filters,
         ...values,
      };
      onFiltersChange(newFilters);
   };

   const handleInputChange = (event) => {
      const { name, value } = event.target;
      setValues((prevValues) => ({
         ...prevValues,
         [name]: +value || 0,
      }));
   };

   const handleInputPress = (event) => {
      const { key } = event;
      if (!/\d/.test(key)) event.preventDefault();
   };

   return (
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
         <FilterLabel>giá</FilterLabel>
         <Box
            sx={{
               display: 'flex',
               gap: '10px',
               pl: 2,
               pr: 2,
            }}
         >
            <TextField
               size='small'
               name='minPrice'
               value={filters.minPrice || values.minPrice}
               onChange={handleInputChange}
               onKeyPress={handleInputPress}
            />
            <span style={{ fontSize: '1.2rem' }}>...</span>
            <TextField
               size='small'
               name='maxPrice'
               value={filters.maxPrice || values.maxPrice}
               onChange={handleInputChange}
               onKeyPress={handleInputPress}
            />
         </Box>
         <Box m={2}>
            <Button variant='contained' onClick={handleSubmit} fullWidth size='small'>
               Áp dụng
            </Button>
         </Box>
      </Box>
   );
};

FilterByPrice.propTypes = {
   onChange: PropTypes.func,
};

export default FilterByPrice;
