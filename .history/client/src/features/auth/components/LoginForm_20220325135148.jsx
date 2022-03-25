import { Box, TextField } from '@mui/material';
import InputField from 'components/FormControl/InputField';
import React from 'react';

const LoginForm = () => {
   return (
      <Box component='form'>
         <InputField />
         <InputField />
      </Box>
   );
};

export default LoginForm;
