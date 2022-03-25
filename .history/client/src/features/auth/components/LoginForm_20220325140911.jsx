import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import CheckboxField from 'components/FormControl/CheckboxField';
import InputField from 'components/FormControl/InputField';
import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
   return (
      <>
         <Box component='form'>
            <InputField />
            <InputField />
            <Grid container>
               <Grid item xs>
                  <CheckboxField />
               </Grid>
               <Grid item alignSelf={'center'}>
                  <Link to='forgot'>Quên mật khẩu?</Link>
               </Grid>
            </Grid>
            <Button variant='contained' fullWidth sx={{ mt: 3 }}>
               Đăng nhập
            </Button>
         </Box>
         <Typography>Chưa có tài khoản? Đăng ký ngay</Typography>
      </>
   );
};

export default LoginForm;
