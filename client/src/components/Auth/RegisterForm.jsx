import { Box, Button, Typography } from '@mui/material';
import InputField from 'components/FormFields/InputField';
import PasswordField from 'components/FormFields/PasswordField';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const defaultValues = {
   fullname: '',
   email: '',
   password: '',
   confirmPassword: '',
};

const schema = yup.object().shape({
   fullname: yup
      .string()
      .required('Họ tên không được để trống')
      .test({
         test: (value) => value.split(/\s+/).length >= 2,
         message: 'Họ tên phải có 2 từ trở lên',
      }),
   email: yup.string().email('Email không hợp lệ').required('Email không được để trống'),
   password: yup
      .string()
      .min(4, 'Mật khẩu tối thiểu 4 kí tự')
      .required('Mật khẩu không được để trống'),
   confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Mật khẩu nhập lại không chính xác')
      .required('Mật khẩu nhập lại không chính xác'),
});

const RegisterForm = ({ onRegister }) => {
   const { control, handleSubmit } = useForm({
      defaultValues,
      mode: 'all',
      resolver: yupResolver(schema),
   });

   return (
      <>
         <Box component='form' onSubmit={handleSubmit(onRegister)} autoComplete='off'>
            {/* USERNAME FIELD */}
            <Controller
               control={control}
               name='fullname'
               render={({ field, fieldState }) => (
                  <InputField field={field} fieldState={fieldState} label='Họ tên' />
               )}
            />

            {/* EMAIL FIELD */}
            <Controller
               control={control}
               name='email'
               rules={{
                  required: true,
               }}
               render={({ field, fieldState }) => (
                  <InputField field={field} fieldState={fieldState} label='Email' />
               )}
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
                  <PasswordField
                     field={field}
                     fieldState={fieldState}
                     label='Xác nhận mật khẩu'
                     disabledShowPassword
                  />
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
