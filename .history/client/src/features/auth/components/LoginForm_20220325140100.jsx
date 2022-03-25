import { Box, Button, TextField } from '@mui/material';
import CheckboxField from 'components/FormControl/CheckboxField';
import InputField from 'components/FormControl/InputField';
import React from 'react';

const LoginForm = () => {
   return (
      <Box component='form'>
         <InputField />
         <InputField />
         <CheckboxField />
         <Button variant='contained' fullWidth>
            Đăng nhập
         </Button>
      </Box>
   );
};

export default LoginForm;
