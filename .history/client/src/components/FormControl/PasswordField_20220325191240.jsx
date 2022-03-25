import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const PasswordField = ({ field, fieldState, placeholder, label, disabledShowPassword }) => {
   // fieldRest contain onChange, onBlur, ref
   const { value, name, ...fieldRest } = { ...field };
   const { invalid, error } = fieldState;
   const [showPassword, setShowPassword] = useState(false);

   const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
   };

   return (
      <TextField
         margin='normal'
         fullWidth
         size='small'
         type={showPassword ? 'text' : 'password'}
         value={value}
         name={name}
         {...fieldRest}
         InputProps={{
            endAdornment: (
               <InputAdornment position='end'>
                  <IconButton aria-label='toggle password visibility' onClick={handleClickShowPassword} edge='end'>
                     {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
               </InputAdornment>
            ),
         }}
         label={label}
         placeholder={placeholder}
         error={invalid}
         helperText={error?.message}
      />
   );
};

PasswordField.defaultProps = {
   placeholder: '',
   label: '',
   disabledShowPassword: false,
};

PasswordField.propTypes = {
   field: PropTypes.object.isRequired,
   fieldState: PropTypes.object.isRequired,
   placeholder: PropTypes.string,
   label: PropTypes.string,
   disabledShowPassword: PropTypes.bool,
};

export default PasswordField;
