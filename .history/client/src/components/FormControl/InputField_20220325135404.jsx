import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const InputField = (props) => {
   return (
      <TextField
         fullWidth
         defaultValue='Hello World'
         id='outlined-error-helper-text'
         label='Error'
         // error
         // helperText='Incorrect entry.'
      />
   );
};

InputField.propTypes = {};

export default InputField;
