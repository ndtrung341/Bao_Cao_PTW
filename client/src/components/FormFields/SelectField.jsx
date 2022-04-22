import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, Select, InputLabel, FormControl, FormHelperText } from '@mui/material';

const SelectField = ({ options, field, fieldState, label, onChange }) => {
   const { value, name, ...fieldRest } = { ...field };
   const { invalid, error } = fieldState;

   const handleSelectChange = (event) => {
      const { value, label } = event.target.value;
      if (onChange) onChange(value);
      field.onChange({ value, label });
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
            renderValue={({ value }) =>
               options.find((item) => item.value == value)?.label || label
            }
         >
            {options.map((item, index) => (
               <MenuItem value={item} key={index}>
                  {item.label}
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
