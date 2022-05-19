import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField } from '@mui/material';
import FilterLabel from './FilterLabel';

const FilterByPrice = ({ onPriceChange, minPrice, maxPrice }) => {
   const [price, setPrice] = useState({
      min: minPrice || 0,
      max: maxPrice || 0,
   });

   const handleSubmit = () => {
      onPriceChange(price.min, price.max);
   };

   const handleInputChange = (event) => {
      const { name, value } = event.target;
      setPrice((prevValues) => ({
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
               name='min'
               value={price.min}
               onChange={handleInputChange}
               onKeyPress={handleInputPress}
            />
            <span style={{ fontSize: '1.2rem' }}>...</span>
            <TextField
               size='small'
               name='max'
               value={price.max}
               onChange={handleInputChange}
               onKeyPress={handleInputPress}
            />
         </Box>
         <Box m={2}>
            <Button variant='contained' onClick={handleSubmit} fullWidth>
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
