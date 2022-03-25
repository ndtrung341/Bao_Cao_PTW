import { Checkbox } from '@material-ui/core';
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
         <Button variant='outlined' fullWidth>
            Đăng nhập
         </Button>
      </Box>
   );
};

export default LoginForm;
