import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const InputField = (props) => {
   return (
      <TextField
         fullWidth
         id='outlined-error-helper-text'
         // error
         // label='Error'
         // defaultValue='Hello World'
         // helperText='Incorrect entry.'
      />
   );
};

InputField.propTypes = {};

export default InputField;
