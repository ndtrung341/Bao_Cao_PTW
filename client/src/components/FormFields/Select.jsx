import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, Select, InputLabel, FormControl, FormHelperText } from '@mui/material';

const SelectCustom = ({ options, field, fieldState, label, onChange }) => {
   const { value, name, ...fieldRest } = { ...field };
   const { invalid, error } = fieldState;

   const handleSelectChange = (event) => {
      if (onChange) onChange(value);
      field.onChange(event.target.value);
   };

   return (
      <FormControl fullWidth margin='normal' size='small' error={invalid}>
         <InputLabel>{label}</InputLabel>
         <Select
            fullWidth
            name={name}
            value={value}
            label={label}
            {...fieldRest}
            onChange={handleSelectChange}
         >
            {options.map((item, index) => (
               <MenuItem value={item.value} key={index}>
                  {item.label}
               </MenuItem>
            ))}
         </Select>
         {invalid ? <FormHelperText>{error?.message}</FormHelperText> : ''}
      </FormControl>
   );
};

SelectCustom.defaultProps = {
   placeholder: '',
   label: '',
   options: [],
};

SelectCustom.propTypes = {
   options: PropTypes.array,
   field: PropTypes.object.isRequired,
   fieldState: PropTypes.object.isRequired,
   label: PropTypes.string,
};

export default SelectCustom;
