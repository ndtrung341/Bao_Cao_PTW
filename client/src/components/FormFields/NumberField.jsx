import { TextField } from '@mui/material';
import React from 'react';
import { numberWithDots } from 'utils';

const NumberField = ({ field, fieldState, thousandSeparator, placeholder, label }) => {
   const { value, name } = field;
   const { invalid, error } = fieldState;

   const handleChange = (e) => {
      const { value } = e.target;
      field.onChange(+value.replaceAll(thousandSeparator, ''));
   };

   const handleKeyPress = (e) => {
      if (!/\d/.test(e.key)) e.preventDefault();
   };

   return (
      <TextField
         margin='normal'
         size='small'
         fullWidth
         placeholder={placeholder}
         label={label}
         name={name}
         value={thousandSeparator ? numberWithDots(value) : value}
         onKeyPress={handleKeyPress}
         onChange={handleChange}
         error={invalid}
         helperText={error?.message}
      />
   );
};

export default NumberField;
