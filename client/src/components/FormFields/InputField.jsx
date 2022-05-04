import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const InputField = ({ field, fieldState, placeholder, label, type }) => {
   const { value, name, ...fieldRest } = { ...field };
   const { invalid, error } = fieldState;

   return (
      <TextField
         margin='normal'
         fullWidth
         size='small'
         name={name}
         type={type}
         value={value}
         placeholder={placeholder}
         label={label}
         {...fieldRest}
         error={invalid}
         helperText={error?.message}
      />
   );
};

InputField.defaultProps = {
   placeholder: '',
   label: '',
   type: 'text',
};

InputField.propTypes = {
   field: PropTypes.object.isRequired,
   fieldState: PropTypes.object.isRequired,
   placeholder: PropTypes.string,
   label: PropTypes.string,
   type: PropTypes.oneOf(['text', 'email', 'number']),
};

export default InputField;
