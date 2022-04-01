import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Button, TextField } from '@mui/material';
import FilterLabel from './FiterLabel';

const FilterByPrice = ({ onChange }) => {
   const [values, setValues] = useState({
      salePrice_gte: 0,
      salePrice_lte: 0,
   });

   const handleSubmit = () => {
      if (!onChange) return;
      onChange(values);
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
               name='salePrice_gte'
               value={values.salePrice_gte}
               onChange={handleInputChange}
               onKeyPress={handleInputPress}
            />
            <span style={{ fontSize: '1.2rem' }}>...</span>
            <TextField
               size='small'
               name='salePrice_lte'
               value={values.salePrice_lte}
               onChange={handleInputChange}
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
