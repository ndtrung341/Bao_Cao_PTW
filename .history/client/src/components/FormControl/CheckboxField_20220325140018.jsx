import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormControlLabel } from '@mui/material';

const CheckboxField = (props) => {
   return <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />;
};

CheckboxField.propTypes = {};

export default CheckboxField;
