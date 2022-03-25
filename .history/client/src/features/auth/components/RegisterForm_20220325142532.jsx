import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import CheckboxField from 'components/FormControl/CheckboxField';
import InputField from 'components/FormControl/InputField';
import React from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
   return (
      <>
         <Box component='form'>
            <InputField />
            <InputField />
            <InputField />
            <Button variant='contained' fullWidth sx={{ mt: 5, mb: 3 }}>
               Đăng ký
            </Button>
         </Box>
         <Typography align='center'>
            Đã có tài khoản? <Link to='/auth/login'>Đăng nhập ngay</Link>
         </Typography>
      </>
   );
};

export default RegisterForm;
