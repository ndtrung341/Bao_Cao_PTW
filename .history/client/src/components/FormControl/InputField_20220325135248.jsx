import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const InputField = (props) => {
   return (
      <TextField
         error
         id='outlined-error-helper-text'
         label='Error'
         defaultValue='Hello World'
         helperText='Incorrect entry.'
      />
   );
};

InputField.propTypes = {};

export default InputField;
