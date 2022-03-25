import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const PasswordField = (props) => {
   const [showPassword, setshowPassword] = React.useState(false);

   const handleClickShowPassword = () => {
      setshowPassword(!showPassword);
   };

   return (
      <TextField
         id='outlined-adornment-password'
         type={values.showPassword ? 'text' : 'password'}
         value={values.password}
         onChange={handleChange('password')}
         endAdornment={
            <InputAdornment position='end'>
               <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
               >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
               </IconButton>
            </InputAdornment>
         }
         label='Password'
      />
   );
};

PasswordField.propTypes = {};

export default PasswordField;
