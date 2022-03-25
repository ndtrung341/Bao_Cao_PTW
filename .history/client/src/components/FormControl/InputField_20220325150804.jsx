import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const InputField = ({ field, fieldState }) => {
   const { onChange, onBlur, value, name, ref } = field;
   const {} = fieldState;
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
   field: int,
};

export default InputField;
