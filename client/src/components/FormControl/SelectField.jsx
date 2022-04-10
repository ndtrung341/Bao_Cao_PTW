import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, Select, InputLabel, FormControl, FormHelperText } from '@mui/material';

const SelectField = ({ options, field, fieldState, label }) => {
   const { value, name, ...fieldRest } = { ...field };
   const { invalid, error } = fieldState;

   return (
      <FormControl fullWidth margin='normal' size='small' error={invalid}>
         <InputLabel>{label}</InputLabel>
         <Select fullWidth name={name} value={value} label={label} {...fieldRest}>
            {options.map((options) => (item, index) => (
               <MenuItem value='' key={index}>
                  1
               </MenuItem>
            ))}
         </Select>
         {invalid ? <FormHelperText>{error?.message}</FormHelperText> : ''}
      </FormControl>
   );
};

SelectField.defaultProps = {
   placeholder: '',
   label: '',
   options: [],
};

SelectField.propTypes = {
   options: PropTypes.array,
   field: PropTypes.object.isRequired,
   fieldState: PropTypes.object.isRequired,
   label: PropTypes.string,
};

export default SelectField;
