import { Box, Button, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
import InputField from 'components/FormControl/InputField';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const defaultValues = {
   email: '',
   password: '',
   remember: false,
};

const LoginForm = () => {
   const { control, handleSubmit, formState } = useForm({ defaultValues: defaultValues });

   const handleLogin = (values) => {
      console.log({ values });
   };

   return (
      <>
         <Box component='form' onSubmit={handleSubmit(handleLogin)}>
            {/* email field */}
            <Controller
               control={control}
               name='email'
               render={({ field, fieldState }) => (
                  <InputField field={field} fieldState={fieldState} label='Email' type='email' />
               )}
            />
            {/* password field */}
            <Controller
               control={control}
               name='password'
               render={({ field, fieldState }) => (
                  <InputField field={field} fieldState={fieldState} label={'Mật khẩu'} />
               )}
            />

            <Grid container>
               <Grid item xs>
                  <Controller
                     control={control}
                     name='remember'
                     render={({ field }) => (
                        <FormControlLabel control={<Checkbox {...field} />} label='Ghi nhớ đăng nhập' />
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
