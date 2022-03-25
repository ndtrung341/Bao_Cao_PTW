import { Box, Button, Typography } from '@mui/material';
import InputField from 'components/FormControl/InputField';
import PasswordField from 'components/FormControl/PasswordField';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const defaultValues = {
   username: '',
   email: '',
   password: '',
   confirmPassword: '',
};

const schema = yup.object().shape({
   username: yup.string().required('Họ tên không được để trống').test({}),
   email: yup.string().email('Email không hợp lệ').required('Email không được để trống'),
   password: yup.string().min(4, 'Mật khẩu tối thiểu 4 kí tự').required('Mật khẩu không được để trống'),
   passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password')], 'Mật khẩu nhập lại không chính xác')
      .required('Mật khẩu nhập lại không chính xác'),
});

const RegisterForm = ({ onRegister }) => {
   const { control, handleSubmit } = useForm({ defaultValues, mode: 'all' });

   return (
      <>
         <Box component='form' onSubmit={handleSubmit(onRegister)}>
            {/* USERNAME FIELD */}
            <Controller
               control={control}
               name='username'
               render={({ field, fieldState }) => <InputField field={field} fieldState={fieldState} label='Họ tên' />}
            />

            {/* EMAIL FIELD */}
            <Controller
               control={control}
               name='email'
               render={({ field, fieldState }) => <InputField field={field} fieldState={fieldState} label='Email' />}
            />

            {/* PASSWORD FIELD */}
            <Controller
               control={control}
               name='password'
               render={({ field, fieldState }) => (
                  <PasswordField field={field} fieldState={fieldState} label='Mật khẩu' />
               )}
            />

            {/* CONFIRM PASSWORD FIELD */}
            <Controller
               control={control}
               name='confirmPassword'
               render={({ field, fieldState }) => (
                  <PasswordField field={field} fieldState={fieldState} label='Xác nhận mật khẩu' disabledShowPassword />
               )}
            />

            <Button variant='contained' fullWidth sx={{ mt: 5, mb: 3 }} type='submit'>
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
