import { Box, Button, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
import InputField from 'components/FormControl/InputField';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PasswordField from 'components/FormControl/PasswordField';

const defaultValues = {
   email: '',
   password: '',
   remember: false,
};

const schema = yup.object().shape({
   email: yup.string().email('Email không hợp lệ').required('Email không được bỏ trống'),
   password: yup.string().required('Mật khẩu không được bỏ trống'),
});

const LoginForm = ({ onLogin }) => {
   const { control, handleSubmit } = useForm({
      defaultValues: defaultValues,
      mode: 'all',
      resolver: yupResolver(schema),
   });

   const handleSubmitLogin = (values) => {
      if (!onLogin) return;
      onLogin(values);
   };

   return (
      <>
         <Box component='form' onSubmit={handleSubmit(handleSubmitLogin)}>
            {/* email field */}
            <Controller
               control={control}
               name='email'
               render={({ field, fieldState }) => (
                  <InputField
                     field={field}
                     fieldState={fieldState}
                     label='Email'
                     type='email'
                  />
               )}
            />

            {/* password field */}
            <Controller
               control={control}
               name='password'
               render={({ field, fieldState }) => (
                  <PasswordField
                     field={field}
                     fieldState={fieldState}
                     label={'Mật khẩu'}
                  />
               )}
            />

            <Grid container>
               <Grid item xs>
                  <Controller
                     control={control}
                     name='remember'
                     render={({ field }) => (
                        <FormControlLabel
                           control={<Checkbox {...field} />}
                           label='Ghi nhớ đăng nhập'
                        />
                     )}
                  />
               </Grid>

               <Grid item alignSelf={'center'}>
                  <Link to='/auth/forgot'>Quên mật khẩu?</Link>
               </Grid>
            </Grid>

            <Button variant='contained' fullWidth sx={{ mt: 5, mb: 3 }} type='submit'>
               Đăng nhập
            </Button>
         </Box>

         <Typography align='center'>
            Chưa có tài khoản? <Link to='/auth/register'>Đăng ký ngay</Link>
         </Typography>
      </>
   );
};

export default LoginForm;
