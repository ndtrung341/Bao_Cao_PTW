import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormControlLabel } from '@mui/material';

const CheckboxField = ({ field, fieldState, placeholder, label }) => {
   const { value, name, ...fieldRest } = { ...field };
   const { invalid, isTouched, error } = fieldState;

   return <FormControlLabel control={<Checkbox value='remember' color='primary' />} label={label} />;
};

CheckboxField.propTypes = {};

export default CheckboxField;
