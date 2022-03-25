import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const InputField = ({ field, fieldState, placeholder }) => {
   const { onChange, onBlur, value, name, ref } = field;
   const { invalid, isTouched, isDirty, error } = fieldState;
   return (
      <TextField
         margin='normal'
         fullWidth
         size='small'
         placeholder='Username'
         id='outlined-error-helper-text'
         label='Error'
         // error
         // helperText='Incorrect entry.'
      />
   );
};

InputField.propTypes = {
   field: PropTypes.object.isRequired,
   fieldState: PropTypes.object.isRequired,
   placeholder: PropTypes.string,
   type: PropTypes.oneOf(['text', 'email']),
};

export default InputField;
