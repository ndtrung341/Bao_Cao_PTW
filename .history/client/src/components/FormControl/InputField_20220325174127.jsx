import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const InputField = ({ field, fieldState, placeholder, label }) => {
   // fieldRest contain onChange, onBlur, ref
   const { value, name, ...fieldRest } = { ...field };
   const { invalid, isTouched, error } = fieldState;
   console.log({ error });

   return (
      <TextField
         margin='normal'
         fullWidth
         size='small'
         name={name}
         value={value}
         placeholder={placeholder}
         label={label}
         {...fieldRest}
         error={invalid && isTouched}
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
   type: PropTypes.oneOf(['text', 'email']),
};

export default InputField;
