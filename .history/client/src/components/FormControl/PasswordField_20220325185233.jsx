import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const PasswordField = ( {field, fieldState, placeholder, label }) => {
   const [showPassword, setshowPassword] = React.useState(false);

   const handleClickShowPassword = () => {
      setshowPassword(!showPassword);
   };

   return (
      <TextField
         id='outlined-adornment-password'
         type={showPassword ? 'text' : 'password'}
         value={}
         endAdornment={
            <InputAdornment position='end'>
               <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  edge='end'
               >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
               </IconButton>
            </InputAdornment>
         }
         label='Password'
      />
   );
};

PasswordField.propTypes = {};

export default PasswordField;
