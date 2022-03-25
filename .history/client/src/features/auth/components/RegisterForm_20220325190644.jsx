import { Box, Button, Typography } from '@mui/material';
import InputField from 'components/FormControl/InputField';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const defaultValues = {
   username: '',
   email: '',
   password: '',
   confirmPassword: '',
};

const RegisterForm = () => {
   const { control, handleSubmit } = useForm({ defaultValues, mode: 'all' });

   return (
      <>
         <Box component='form'>
            {/* USERNAME FIELD */}
            <Controller
               control={control}
               name='username'
               render={({ field, fieldState }) => <InputField field={field} fieldState={fieldState} />}
            />

            {/* EMAIL FIELD */}
            <InputField />

            {/* PASSWORD FIELD */}
            <InputField />

            {/* CONFIRM PASSWORD FIELD */}
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
